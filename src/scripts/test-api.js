const { OpenAI } = require("openai");
const dotenv = require('dotenv').config();
const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const results = [];

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
});

const csvFilePath = 'path/to/your/sample_spending.csv'; // Replace with the path to your CSV file
const updatedCsvFilePath = 'path/to/your/updated_sample_spending.csv'; // Replace with the path to where you want to save the updated CSV

// Function to assess an item using OpenAI
const assessItemUsingAI = async (item) => {
    // Here is your detailed prompt with the item inserted into it
    const prompt = `I'm looking for an individualized assessment for the item: ${item}, focusing on the unique environmental impact of each product and considering specific aspects like organic options, packaging, and waste generation. This approach requires a more nuanced and product-specific evaluation. Rate 0~3 in eco credit column, and write details in one sentence about why it rated that. Make sure if there's a better option suggested, include that in details. For example, if a user purchased an eggplant, you can rate it 2 and say on details there is an organic option. Can you research if there's any unknown item and make sure you are rating everything. The given csv file already rated and provides detail how it was measured. Based on all these information and further research, make sure you are updating new item purchased entries, where the eco credit column and details column are empty with the rated eco credit, and provide detail.`;

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7,
    });
    const content = response.data.choices[0].text.trim();
    // Parse the AI's response to extract the eco credit and details
    const lines = content.split('\n');
    const ecoCredit = parseInt(lines[0], 10); // Assuming the first line is the eco credit
    const details = lines.slice(1).join(' '); // The rest is details
    return { ecoCredit, details };
};

// Function to update the original CSV with assessments
const updateCsv = async (data) => {
    const csvWriter = createCsvWriter({
        path: csvFilePath, // This now points to the original CSV file
        header: [
            {id: 'Date', title: 'Date'},
            {id: 'item', title: 'item'},
            {id: 'location', title: 'location'},
            {id: 'Amount', title: 'Amount'},
            {id: 'EcoCredit', title: 'EcoCredit'},
            {id: 'Details', title: 'Details'}
        ],
        append: false, // Set to false to overwrite the entire file
    });
    await csvWriter.writeRecords(data);
    console.log('The original CSV file has been overwritten with updated data.');
};

// Function to read the CSV, assess items as needed, and update the CSV
// Call this function to make AI work!! XD
const processCsv = () => {
    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => results.push(row))
        .on('end', async () => {
            for (let i = 0; i < results.length; i++) {
                if (!results[i].EcoCredit || !results[i].Details) {
                    // Perform AI assessment for this row's item
                    const assessment = await assessItemUsingAI(results[i].item);
                    results[i].EcoCredit = assessment.ecoCredit;
                    results[i].Details = assessment.details;
                }
            }
            // Update the CSV with the new assessments
            await updateCsv(results);
            console.log('CSV file has been updated.');
        });
};

processCsv();

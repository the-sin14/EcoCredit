const { OpenAI } = require("openai");
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
});

const testItem = 'apple'; // Replace 'apple' with your test item

const assessItem = async (item) => {
    const prompt = `I'm looking for an individualized assessment for each item, focusing on the unique environmental impact of each product and considering specific aspects like organic options, packaging, and waste generation. This approach requires a more nuanced and product-specific evaluation. Rate 0~3 in eco credit column, and write details in one sentence about why it rated that. Make sure if there's a better option suggested, include that in details. For example, if a user purchased an eggplant, you can rate it 2 and say on details there is an organic option. Can you research if there's any unknown item and make sure you are rating everything. The given CSV file already rated and provides detail on how it was measured. Based on all these information and further research, make sure you are updating new item purchased entries, where the eco credit column and details column are empty with the rated eco credit, and provides detail. Update CSV file with filled information in empty spaces. The item for assessment is: ${item}`;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "user", "content": prompt }],
            max_tokens: 100,
        });

        console.log("AI Response:", response.choices[0].message.content);
    } catch (error) {
        console.error("Error:", error);
    }
};

assessItem(testItem);

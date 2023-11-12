const { OpenAI } = require("openai");
require('dotenv').config();
const csv = require('csv-parser');
const fs = require('fs');
const results = [];

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
});

// csv is stored in array, access it using indexes
fs.createReadStream('sample_spending.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results[0]);
});

const runPrompt = async () => {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ "role": "user", "content": "tell me a joke", }],
        max_tokens: 100,
    });
    console.log(chatCompletion.choices[0].message.content);
}

runPrompt();
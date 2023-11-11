const { OpenAI } = require("openai");
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
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
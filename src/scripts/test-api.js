const { Configuration, OpenAIApi} = require("openai");

const config = new Configuration({
    apiKey: process.env.OpenAIApi,
})

const openai = new OpenAIApi(config);

const runPrompt = async() => {
    const prompt = "Tell me a joke about a cat eating pasta";

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        maxToken: 1000,
        temperature: 1,
    })

    console.log(response.data)
}

runPrompt();
import OpenAI from "openai";
import dotenv from 'dotenv'

dotenv.config()

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const askQuestion = async(req, res, next) => {
    const { question } = req.body
    console.log(`This is the request body ${question} `, req.body)
    try {
        const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: `${question}`,
            },
        ],
        store: true,
    });
    
    const response = completion.choices[0].message.content
    console.log(response)
    res.json({ message:response })
    } catch (error) {
        res.status(400).json(error)
    }
}

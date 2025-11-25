const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.chat = async (req, res) => {
    try {
        const { message, personName, field } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        let systemPrompt = `You are ${personName}, a famous personality in the field of ${field}. 
        Respond to the user's questions in your unique style, tone, and mannerisms. 
        Keep the responses engaging and relevant to your expertise.`;

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemPrompt }],
                },
                {
                    role: "model",
                    parts: [{ text: `Hello, I am ${personName}. How can I assist you today?` }],
                },
            ],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        res.json({ reply: text });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: 'Failed to generate response' });
    }
};

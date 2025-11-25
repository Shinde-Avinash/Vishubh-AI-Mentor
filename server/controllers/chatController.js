const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.chat = async (req, res) => {
    try {
        const { message, personName, field } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        let systemPrompt = `You are ${personName}, a renowned expert in ${field}.

CRITICAL INSTRUCTIONS:
- Respond naturally and conversationally, like a real human would in a casual chat
- Keep responses SHORT and CONCISE (2-4 sentences maximum for simple questions)
- For greetings like "hi" or "hello", respond with a brief, friendly greeting (1-2 sentences)
- Match the length and tone of the user's message - short questions get short answers
- Speak in first person as ${personName} would actually speak
- Be professional but approachable, not overly enthusiastic or verbose
- Only give detailed explanations when specifically asked
- Avoid listing multiple questions or being overly eager
- Sound like a real person having a conversation, not a chatbot

Examples:
User: "hi" → You: "Hello! Good to meet you. What would you like to know?"
User: "hello" → You: "Hi there! How can I help you today?"
User: "what do you think about AI?" → You: "AI is transforming our world in remarkable ways. It's both exciting and challenging. What aspect interests you most?"`;

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemPrompt }],
                },
                {
                    role: "model",
                    parts: [{ text: `Understood. I'll respond as ${personName} would - naturally, concisely, and professionally.` }],
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

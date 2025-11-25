import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const Chat = () => {
    const { personName } = useParams();
    const location = useLocation();
    const field = location.state?.field || 'General';
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: 'user', text: input }];
        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            const res = await axios.post('http://localhost:5000/api/chat', {
                message: input,
                personName: decodeURIComponent(personName),
                field
            });

            setMessages([...newMessages, { role: 'ai', text: res.data.reply }]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages([...newMessages, { role: 'ai', text: 'Sorry, I am unable to respond right now.' }]);
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="p-4 text-white bg-indigo-600 shadow-md">
                <h1 className="text-2xl font-bold text-center">Chat with {personName}</h1>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
                <div className="max-w-3xl mx-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-xs md:max-w-md p-3 rounded-lg shadow ${msg.role === 'user'
                                        ? 'bg-blue-500 text-white rounded-br-none'
                                        : 'bg-white text-gray-800 rounded-bl-none'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex justify-start">
                            <div className="p-3 text-gray-500 bg-white rounded-lg shadow rounded-bl-none">
                                Typing...
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="p-4 bg-white shadow-inner">
                <div className="flex max-w-3xl mx-auto space-x-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Ask something..."
                        className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        onClick={sendMessage}
                        disabled={loading}
                        className="px-6 py-2 font-bold text-white transition duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700 disabled:opacity-50"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;

import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const Chat = () => {
    const { personName } = useParams();
    const location = useLocation();
    const field = location.state?.field || "General";

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: "user", text: input }];
        setMessages(newMessages);
        setInput("");
        setLoading(true);

        try {
            const res = await axios.post("http://localhost:5000/api/chat", {
                message: input,
                personName: decodeURIComponent(personName),
                field,
            });

            setMessages([
                ...newMessages,
                { role: "ai", text: res.data.reply },
            ]);
        } catch (error) {
            setMessages([
                ...newMessages,
                { role: "ai", text: "Sorry, I am unable to respond right now." },
            ]);
        }
        setLoading(false);
    };

    return (
        <>
            <style>{`
                body {
                    margin: 0;
                    background: #0d0f12;
                    font-family: 'Inter', sans-serif;
                    color: #e5e7eb;
                }

                .chat-container {
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    background: #0d0f12;
                }

                .chat-header {
                    background: #111418;
                    padding: 18px;
                    font-size: 20px;
                    font-weight: bold;
                    text-align: center;
                    border-bottom: 1px solid #1e1f22;
                }

                .chat-subtitle {
                    margin-top: 4px;
                    font-size: 13px;
                    opacity: 0.7;
                    font-weight: 400;
                }

                .chat-body {
                    flex: 1;
                    overflow-y: auto;
                    padding: 20px;
                }

                .chat-wrapper {
                    max-width: 800px;
                    margin: auto;
                }

                .msg-row {
                    display: flex;
                    margin-bottom: 14px;
                }

                .msg-user {
                    justify-content: flex-end;
                }

                .msg-ai {
                    justify-content: flex-start;
                }

                .bubble {
                    max-width: 75%;
                    padding: 14px 18px;
                    border-radius: 14px;
                    font-size: 15px;
                    line-height: 1.5;
                    animation: fadeIn 0.2s ease-in-out;
                }

                .bubble-user {
                    background: #2563eb;
                    color: white;
                    border-bottom-right-radius: 0;
                }

                .bubble-ai {
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    backdrop-filter: blur(6px);
                    color: #e2e8f0;
                    border-bottom-left-radius: 0;
                }

                .typing {
                    background: rgba(255, 255, 255, 0.06);
                    padding: 12px 18px;
                    border-radius: 14px;
                    border-bottom-left-radius: 0;
                    font-size: 14px;
                    color: #9ca3af;
                    width: fit-content;
                    animation: fadeIn 0.3s ease-in-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(4px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .chat-footer {
                    padding: 12px;
                    background: #111418;
                    border-top: 1px solid #1e1f22;
                }

                .footer-inner {
                    max-width: 800px;
                    margin: auto;
                    display: flex;
                    gap: 10px;
                }

                .input-box {
                    flex: 1;
                    padding: 14px 18px;
                    border-radius: 30px;
                    border: 1px solid #2a2d31;
                    font-size: 15px;
                    background: #0f1215;
                    color: white;
                }

                .input-box::placeholder {
                    color: #6b7280;
                }

                .send-btn {
                    background: #2563eb;
                    border: none;
                    padding: 12px 26px;
                    border-radius: 30px;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                    transition: 0.2s;
                }

                .send-btn:hover {
                    background: #1d4ed8;
                }

                .send-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                @media (max-width: 600px) {
                    .bubble {
                        max-width: 90%;
                    }
                }
            `}</style>

            <div className="chat-container">

                <div className="chat-header">
                    Chat with {personName}
                    <div className="chat-subtitle">{field}</div>
                </div>

                <div className="chat-body">
                    <div className="chat-wrapper">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`msg-row ${msg.role === "user" ? "msg-user" : "msg-ai"}`}
                            >
                                <div
                                    className={`bubble ${msg.role === "user" ? "bubble-user" : "bubble-ai"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="msg-row msg-ai">
                                <div className="typing">Typing…</div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="chat-footer">
                    <div className="footer-inner">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Type a message..."
                            className="input-box"
                        />

                        <button
                            onClick={sendMessage}
                            disabled={loading}
                            className="send-btn"
                        >
                            Send
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Chat;

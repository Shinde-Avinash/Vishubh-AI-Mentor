import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <style>
                {`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Poppins', sans-serif;
                }

                /* Prevent scrolling on this page only */
                .landing-wrapper {
                    height: calc(100vh - 120px); /* Adjust this based on your header+footer height */
                    overflow: hidden !important;
                    background: #0d0d0d;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .landing-container {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    color: #ffffff;
                    text-align: center;
                    padding: 20px;
                    overflow: hidden; /* No scroll inside */
                }

                @keyframes fadeSlide {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                .landing-box {
                    max-width: 850px;
                    margin: 0 auto;
                    animation: fadeSlide 1.2s ease forwards;
                    position: relative;
                    z-index: 2;
                }

                .title {
                    font-size: 48px;
                    font-weight: 800;
                    margin-bottom: 18px;
                    background: linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .subtitle {
                    font-size: 20px;
                    opacity: 0.85;
                    margin-bottom: 40px;
                    line-height: 1.6;
                }

                .glow {
                    color: #a78bfa;
                    text-shadow: 0 0 10px rgba(167, 139, 250, 0.6);
                    font-weight: 700;
                }

                .start-btn {
                    padding: 15px 40px;
                    font-size: 18px;
                    font-weight: 700;
                    background: #6366f1;
                    color: white;
                    border-radius: 40px;
                    border: none;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .start-btn:hover {
                    transform: scale(1.07);
                    box-shadow: 0 0 20px rgba(99, 102, 241, 0.7);
                    background: #4f46e5;
                }

                /* Floating Bubbles */
                .bubble {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(99, 102, 241, 0.12);
                    animation: float 7s infinite ease-in-out;
                    z-index: 1;
                }

                @keyframes float {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-25px); }
                    100% { transform: translateY(0); }
                }

                .b1 { width: 110px; height: 110px; top: 12%; left: 10%; }
                .b2 { width: 160px; height: 160px; bottom: 15%; right: 10%; animation-delay: 1s; }
                .b3 { width: 90px; height: 90px; top: 60%; left: 30%; animation-delay: 2s; }

                @media (max-width: 600px) {
                    .title { font-size: 34px; }
                    .subtitle { font-size: 16px; }
                }
                `}
            </style>

            {/* WRAPPER fixes scroll issue */}
            <div className="landing-wrapper">

                <div className="landing-container">

                    <div className="bubble b1"></div>
                    <div className="bubble b2"></div>
                    <div className="bubble b3"></div>

                    <div className="landing-box">
                        <h1 className="title">Meet Your AI Personality Mentor</h1>

                        <p className="subtitle">
                            Chat with legends, innovators & world experts powered by
                            <span className="glow"> Google Gemini AI</span>.
                            <br />
                            Personalized guidance. Smart conversations. Instant knowledge.
                        </p>

                        <button
                            className="start-btn"
                            onClick={() => navigate("/Home")}
                        >
                            Get Started →
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;

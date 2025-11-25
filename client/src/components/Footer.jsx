const Footer = () => {
    return (
        <>
            <style>{`
                .footer {
                    background: #111418;
                    border-top: 1px solid #1e1f22;
                    padding: 24px 20px;
                    text-align: center;
                    color: #9ca3af;
                    margin-top: auto;
                }

                .footer-content {
                    max-width: 1200px;
                    margin: auto;
                }

                .footer-text {
                    font-size: 14px;
                    margin-bottom: 8px;
                }

                .footer-links {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-top: 12px;
                    flex-wrap: wrap;
                }

                .footer-link {
                    color: #2563eb;
                    text-decoration: none;
                    font-size: 14px;
                    transition: 0.2s;
                }

                .footer-link:hover {
                    color: #3b82f6;
                    text-decoration: underline;
                }

                .footer-copyright {
                    margin-top: 12px;
                    font-size: 13px;
                    opacity: 0.7;
                }

                @media (max-width: 600px) {
                    .footer {
                        padding: 20px 16px;
                    }

                    .footer-text {
                        font-size: 13px;
                    }

                    .footer-links {
                        gap: 15px;
                    }
                }
            `}</style>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-text">
                        Chat with AI personalities powered by Google Gemini
                    </div>

                    <div className="footer-links">
                        <a href="#" className="footer-link">About</a>
                        <a href="#" className="footer-link">Privacy Policy</a>
                        <a href="#" className="footer-link">Terms of Service</a>
                        <a href="#" className="footer-link">Contact</a>
                    </div>

                    <div className="footer-copyright">
                        © 2025 CG Agent. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

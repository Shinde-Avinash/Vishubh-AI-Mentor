import { useNavigate } from "react-router-dom";

const fields = [
    { name: "Computer Science", color: "#3B82F6" },
    { name: "Mechanical Engineering", color: "#EF4444" },
    { name: "Political Science", color: "#F59E0B" },
    { name: "AI & ML", color: "#8B5CF6" },
    { name: "Finance", color: "#10B981" },
];

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <style>
                {`
                body {
                    margin: 0;
                    padding: 0;
                    background: #0d0f12;
                    font-family: 'Inter', sans-serif;
                    color: #e5e7eb;
                }

                .home-container {
                    min-height: 100vh;
                    padding: 40px 20px;
                }

                .title {
                    text-align: center;
                    margin-bottom: 40px;
                    font-size: 36px;
                    font-weight: 700;
                    color: #f3f4f6;
                }

                .grid-box {
                    max-width: 900px;
                    margin: auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 25px;
                }

                .field-card {
                    padding: 45px 20px;
                    border-radius: 18px;
                    font-size: 22px;
                    font-weight: 600;
                    text-align: center;
                    cursor: pointer;
                    transition: 0.25s ease;
                    color: white;
                    border: 1px solid rgba(255,255,255,0.08);
                    backdrop-filter: blur(6px);
                    box-shadow: 0px 4px 20px rgba(0,0,0,0.25);
                }

                .field-card:hover {
                    transform: translateY(-6px) scale(1.03);
                    box-shadow: 0px 10px 28px rgba(0,0,0,0.35);
                }

                @media (max-width: 600px) {
                    .title {
                        font-size: 28px;
                    }
                    .field-card {
                        padding: 35px 20px;
                        font-size: 20px;
                    }
                }
                `}
            </style>

            <div className="home-container">
                <h1 className="title">Select Your Field</h1>

                <div className="grid-box">
                    {fields.map((field) => (
                        <div
                            key={field.name}
                            onClick={() => navigate(`/field/${encodeURIComponent(field.name)}`)}
                            className="field-card"
                            style={{
                                backgroundColor: `${field.color}22`, // Transparent tint
                                border: `1px solid ${field.color}55`, // Soft colored border
                                boxShadow: `0 0 12px ${field.color}33`
                            }}
                        >
                            {field.name}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;

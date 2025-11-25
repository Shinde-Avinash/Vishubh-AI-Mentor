import { useParams, useNavigate } from "react-router-dom";

const peopleData = {
    "Computer Science": ["Alan Turing", "Grace Hopper", "Tim Berners-Lee"],
    "Mechanical Engineering": ["Nikola Tesla", "Henry Ford", "James Watt"],
    "Political Science": ["Narendra Modi", "Barack Obama", "Angela Merkel"],
    "AI & ML": ["Sam Altman", "Geoffrey Hinton", "Yann LeCun"],
    "Finance": ["Warren Buffett", "Ray Dalio", "Jamie Dimon"],
};

const PeopleList = () => {
    const { fieldName } = useParams();
    const navigate = useNavigate();
    const people = peopleData[decodeURIComponent(fieldName)] || [];

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

                .people-page {
                    min-height: 100vh;
                    padding: 40px 20px;
                }

                .title {
                    text-align: center;
                    font-size: 34px;
                    font-weight: 700;
                    margin-bottom: 40px;
                    color: #f3f4f6;
                }

                .grid {
                    max-width: 1000px;
                    margin: auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 25px;
                }

                .card {
                    background: rgba(255,255,255,0.05);
                    border-radius: 16px;
                    padding: 28px;
                    border: 1px solid rgba(255,255,255,0.08);
                    box-shadow: 0px 4px 20px rgba(0,0,0,0.25);
                    backdrop-filter: blur(6px);
                    transition: 0.25s ease;
                }

                .card:hover {
                    transform: translateY(-6px) scale(1.03);
                    box-shadow: 0px 12px 30px rgba(0,0,0,0.45);
                }

                .person-name {
                    font-size: 22px;
                    font-weight: 700;
                    margin-bottom: 18px;
                    color: #ffffff;
                }

                .chat-btn {
                    width: 100%;
                    padding: 14px;
                    background: #4f46e5;
                    border-radius: 10px;
                    border: none;
                    font-weight: 700;
                    color: white;
                    font-size: 15px;
                    cursor: pointer;
                    transition: 0.25s;
                }

                .chat-btn:hover {
                    background: #4338ca;
                }

                @media (max-width: 600px) {
                    .title {
                        font-size: 26px;
                    }
                    .person-name {
                        font-size: 20px;
                    }
                }
                `}
            </style>

            <div className="people-page">
                <h1 className="title">Top Minds in {fieldName}</h1>

                <div className="grid">
                    {people.map((person) => (
                        <div key={person} className="card">
                            <h2 className="person-name">{person}</h2>

                            <button
                                className="chat-btn"
                                onClick={() =>
                                    navigate(`/chat/${encodeURIComponent(person)}`, {
                                        state: { field: fieldName },
                                    })
                                }
                            >
                                Chat with {person}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PeopleList;

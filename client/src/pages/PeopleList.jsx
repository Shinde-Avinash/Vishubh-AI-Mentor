import { useParams, useNavigate } from 'react-router-dom';

const peopleData = {
    'Computer Science': ['Alan Turing', 'Grace Hopper', 'Tim Berners-Lee'],
    'Mechanical Engineering': ['Nikola Tesla', 'Henry Ford', 'James Watt'],
    'Political Science': ['Narendra Modi', 'Barack Obama', 'Angela Merkel'],
    'AI & ML': ['Sam Altman', 'Geoffrey Hinton', 'Yann LeCun'],
    'Finance': ['Warren Buffett', 'Ray Dalio', 'Jamie Dimon'],
};

const PeopleList = () => {
    const { fieldName } = useParams();
    const navigate = useNavigate();
    const people = peopleData[decodeURIComponent(fieldName)] || [];

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">Top Minds in {fieldName}</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {people.map((person) => (
                    <div key={person} className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="mb-4 text-2xl font-bold text-gray-800">{person}</h2>
                        <button
                            onClick={() => navigate(`/chat/${encodeURIComponent(person)}`, { state: { field: fieldName } })}
                            className="w-full py-2 font-bold text-white transition duration-300 bg-indigo-600 rounded-lg hover:bg-indigo-700"
                        >
                            Chat with {person}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PeopleList;

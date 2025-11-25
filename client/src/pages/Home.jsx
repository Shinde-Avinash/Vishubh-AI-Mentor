import { useNavigate } from 'react-router-dom';

const fields = [
    { name: 'Computer Science', color: 'bg-blue-500' },
    { name: 'Mechanical Engineering', color: 'bg-red-500' },
    { name: 'Political Science', color: 'bg-yellow-500' },
    { name: 'AI & ML', color: 'bg-purple-500' },
    { name: 'Finance', color: 'bg-green-500' },
];

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">Select Your Field</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {fields.map((field) => (
                    <div
                        key={field.name}
                        onClick={() => navigate(`/field/${encodeURIComponent(field.name)}`)}
                        className={`${field.color} p-8 rounded-xl shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center`}
                    >
                        <h2 className="text-2xl font-bold text-white">{field.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

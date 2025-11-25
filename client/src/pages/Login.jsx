import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userEmail", res.data.user.email);
            localStorage.setItem("userName", res.data.user.name);
            navigate("/LandingPage");
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <>
            <style>{`
                * { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial; }

                html, body {
                    height: 100%;
                    background: #1a1d29;
                    overflow: hidden;
                }

                .container {
                    height: 100vh;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                }

                .card {
                    width: 100%;
                    max-width: 420px;
                    background: #23262f;
                    padding: 30px;
                    border-radius: 12px;
                    border: 1px solid #2d3038;
                    text-align: center;
                }

                h1 { color: #e5e7eb; margin-bottom: 30px; }
                h2 { color: #e5e7eb; margin-bottom: 20px; }

                input {
                    width: 100%;
                    padding: 12px;
                    margin-bottom: 18px;
                    background: #2d3038;
                    border: 1px solid #3d4048;
                    color: white;
                    border-radius: 8px;
                }

                button {
                    width: 100%;
                    padding: 12px;
                    background: #10b981;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-weight: bold;
                    cursor: pointer;
                }
                
                button:hover { background: #059669; }

                p { color: #9ca3af; margin-top: 15px; }
                a { color: #10b981; text-decoration: none; }
                a:hover { text-decoration: underline; }
            `}</style>

            <div className="container">
                <div className="card">
                    <h1>Login</h1>
                    <h2>Welcome Back</h2>

                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

                        <button type="submit">Login</button>
                    </form>

                    <p>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;

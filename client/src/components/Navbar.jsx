import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showProfile, setShowProfile] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Get user info from localStorage
        const token = localStorage.getItem("token");
        const userEmail = localStorage.getItem("userEmail");
        const userName = localStorage.getItem("userName");

        if (token && userEmail) {
            setUser({ email: userEmail, name: userName || "User" });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userName");
        navigate("/login");
    };

    const handleHome = () => {
        navigate("/LandingPage");
    };

    // Don't show navbar on login/register pages
    if (location.pathname === "/login" || location.pathname === "/register") {
        return null;
    }

    return (
        <>
            <style>{`
                .navbar {
                    background: #111418;
                    border-bottom: 1px solid #1e1f22;
                    padding: 12px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }

                .nav-brand {
                    font-size: 22px;
                    font-weight: 700;
                    color: #2563eb;
                    cursor: pointer;
                }

                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .nav-btn {
                    background: transparent;
                    border: 1px solid #2a2d31;
                    color: #e5e7eb;
                    padding: 8px 18px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: 500;
                    transition: 0.2s;
                }

                .nav-btn:hover {
                    background: #1e1f22;
                    border-color: #2563eb;
                }

                .profile-container {
                    position: relative;
                }

                .profile-icon {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #2563eb, #8b5cf6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 700;
                    cursor: pointer;
                    transition: 0.2s;
                }

                .profile-icon:hover {
                    transform: scale(1.1);
                }

                .profile-dropdown {
                    position: absolute;
                    top: 50px;
                    right: 0;
                    background: #1a1d24;
                    border: 1px solid #2a2d31;
                    border-radius: 12px;
                    padding: 16px;
                    min-width: 220px;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
                    animation: fadeIn 0.2s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .profile-info {
                    margin-bottom: 12px;
                    padding-bottom: 12px;
                    border-bottom: 1px solid #2a2d31;
                }

                .profile-name {
                    font-weight: 600;
                    color: #f3f4f6;
                    margin-bottom: 4px;
                }

                .profile-email {
                    font-size: 13px;
                    color: #9ca3af;
                }

                .logout-btn {
                    width: 100%;
                    background: #ef4444;
                    border: none;
                    color: white;
                    padding: 10px;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: 0.2s;
                }

                .logout-btn:hover {
                    background: #dc2626;
                }

                @media (max-width: 600px) {
                    .nav-brand {
                        font-size: 18px;
                    }
                    
                    .nav-btn {
                        padding: 6px 12px;
                        font-size: 14px;
                    }

                    .profile-dropdown {
                        right: -10px;
                    }
                }
            `}</style>

            <nav className="navbar">
                <div className="nav-brand" onClick={handleHome}>
                    CG Agent
                </div>

                <div className="nav-links">


                    <div className="profile-container">
                        <div
                            className="profile-icon"
                            onClick={() => setShowProfile(!showProfile)}
                        >
                            {user?.name?.charAt(0).toUpperCase() || "U"}
                        </div>

                        {showProfile && (
                            <div className="profile-dropdown">
                                <div className="profile-info">
                                    <div className="profile-name">{user?.name || "User"}</div>
                                    <div className="profile-email">{user?.email || "No email"}</div>
                                </div>
                                <button className="logout-btn" onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

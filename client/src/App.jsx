import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import PeopleList from './pages/PeopleList';
import Chat from './pages/Chat';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/register" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/field/:fieldName" element={<PeopleList />} />
            <Route path="/chat/:personName" element={<Chat />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

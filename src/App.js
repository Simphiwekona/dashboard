import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Users from "./pages/Users";
import Login from "./pages/Login";  // Import your Login component
import { useState } from 'react';
import AddUsers from "./pages/AddUsers";
import Signup from "./pages/Signup";

// Main App Component
const MainApp = () => {
    return (
        <>
            <div className="sidebar">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="/user">Users</a>
                <a href="/user" className="login_button">Login</a>
            </div>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Navigate to="/user" />} />
                    <Route path="/user" element={<Users />} />
                    <Route path="/add-users" element={<AddUsers />} />
                    <Route path="/sign-up" element={<Signup />} />
                </Routes>
            </div>
        </>
    );
};

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <>
                {isLoggedIn ? (
                    <MainApp />
                ) : (
                    <Login onLogin={() => setIsLoggedIn(true)} />  // Pass a callback to update isLoggedIn state
                )}
            </>
        </BrowserRouter>
    );
}

export default App;

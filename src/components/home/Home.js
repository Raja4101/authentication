import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state) => state.auth);

    if (!isLoggedIn) {
        navigate('/login');
        return null;
    }

    return (
        <div className="home-container">
            <h1>Welcome to the Home</h1>
            <p>logged in successfully.</p>
        </div>
    );
};

export default Home;
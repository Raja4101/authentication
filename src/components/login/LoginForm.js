import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, toggleRememberMe, loginSuccess, loginFailure } from "./slice/authSlice";
import { useNavigate } from "react-router-dom";
import ForgotPassword from './ForgotPassword';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email, password, rememberMe, error } = useSelector((state) => state.auth);

    const mockEmail = "john.doe@example.com";
    const mockPassword = "123";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === mockEmail && password === mockPassword) {
            const mockUser = { email: mockEmail, name: "John Doe", id: 1 };
            dispatch(loginSuccess(mockUser));
            navigate('/home');
        } else {
            dispatch(loginFailure("Invalid email or password"));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter maild id"
                    className="input-email"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    className="input-password"
                    value={password}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                    required
                />
            </div>
            <div className="checkbox-container">
                <label>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => dispatch(toggleRememberMe())}
                    />
                    Remember Me
                </label>
                <ForgotPassword />
            </div>
            <button className="login-button" type="submit">Login</button>
        </form>
    );
};

export default LoginForm;

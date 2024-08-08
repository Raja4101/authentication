import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, toggleRememberMe, signUpSuccess, signUpFailure } from "../login/slice/authSlice";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email, password, rememberMe, error } = useSelector((state) => state.auth);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (email && password && firstName && lastName) {
                const mockUser = { email, firstName, lastName, id: 1 };
                dispatch(signUpSuccess(mockUser));
                navigate('/home');
            } else {
                dispatch(signUpFailure("Please fill in all fields"));
            }
        } catch (error) {
            dispatch(signUpFailure("An error occurred during sign-up"));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Enter name:</label>
                <input
                    type="text"
                    id="firstname"
                    placeholder="First name"
                    className="input-first"
                    value={firstName}
                    onChange={(e) => dispatch(setFirstName(e.target.value))}
                    required
                />
                <input
                    type="text"
                    id="lastname"
                    placeholder="Last name"
                    className="input-final"
                    value={lastName}
                    onChange={(e) => dispatch(setLastName(e.target.value))}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter mail id"
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
                    Remember me
                </label>
            </div>
            <button className="login-button" type="submit">Sign up</button>
        </form>
    )
}

export default SignupForm;
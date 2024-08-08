import React from "react";
import './SignUp.css';
import { FaKey } from "react-icons/fa";
import Title from "../login/Title";
import GoogleSignupButton from "./GoogleSignupButton";
import SignupForm from "./SignupForm";

const SignUp = () => {
    
    return (
        <>
            <Title />
            <div className="login-form">
                <h2>
                    <span className="sign-up">Sign Up</span>
                    <FaKey className="icon-key" />
                </h2>
                <p>
                    <span>Enter details to create account</span>
                </p>
                <GoogleSignupButton />
                <div className="divider">
                    <span>Or sign up with email</span>
                </div>
                <SignupForm />
                <div className="container">
                    <p>Already have an account?</p>
                    <a href="/login">
                        Login now
                    </a>
                </div>
            </div>
        </>
    )
};

export default SignUp;
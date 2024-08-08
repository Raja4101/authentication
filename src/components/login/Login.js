import React from "react";
import '../signup/SignUp.css';
import { MdWavingHand, MdArrowOutward } from "react-icons/md";
import Title from "./Title";
import GoogleLoginButton from "./GoogleLoginButton.";
import LoginForm from "./LoginForm";


const Login = () => {
    return (
        <>
            <Title />
            <div className="login-form">
                <h2>Login</h2>
                <h4 className="login-head">
                    <span>Hi, Welcome back</span>
                    <MdWavingHand className="icon-hand" />
                </h4>
                <GoogleLoginButton />
                <div className="divider">
                    <span>Or log in with email</span>
                </div>
                <LoginForm />
                <div className="container">
                    <p>Not registered yet?</p>
                    <a href="/signup">
                        Create New Account <MdArrowOutward />
                    </a>
                </div>
            </div>
        </>
    )
};

export default Login;
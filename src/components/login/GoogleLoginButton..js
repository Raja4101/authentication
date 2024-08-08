import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton = () => {
    return (
        <div>
            <button className="button-login-google" onClick={() => alert('Google login not implemented')}>
                <FcGoogle className="icon-google" />
                Log in with Google
            </button>
        </div>
    )
};

export default GoogleLoginButton;

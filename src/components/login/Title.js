import React from "react";
import { DiApple } from "react-icons/di";
import '../signup/SignUp.css';

const Title = () => (
    <h3>
        <DiApple className="icon-company" />
        <span className="title-company">Invooce</span>
        <hr className="hrStyle" />
    </h3>
);

export default Title;
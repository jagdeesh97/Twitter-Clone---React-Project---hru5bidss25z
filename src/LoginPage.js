import React from "react";
import "./LoginPage.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./Context/AuthContext";
import GoogleButton from "react-google-button";


const LoginPage = () => {
    const navigate = useNavigate();
    const { googleSignIn, user } = UserAuth();

    const signIn = async () => {
        await googleSignIn();

    };

    useEffect(() => {
        if (user) {
            console.log("login page error")
            navigate("/main");
        }
    });
    return (

        <div className="user-login">
            <div className="sign-up-image">

                <img
                    className="image"
                    src="http://3.bp.blogspot.com/-NxouMmz2bOY/T8_ac97cesI/AAAAAAAAGg0/e3vY1_bdnbE/s1600/Twitter+logo+2012.png"
                    alt=""
                />
            </div>

            <div className="signup-main">
                <h1 className="happening">
                    Happening now!!
                </h1>
                <h3 className="join-today">
                    Join Twitter today.
                </h3>
                <GoogleButton className="singIn" onClick={signIn} />
            </div>
        </div>
    )
}
export default LoginPage;
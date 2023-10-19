import React from "react";
import "./LoginPage.css"
import { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { UserAuth } from "./Context/AuthContext";
import GoogleButton from "react-google-button";


const LoginPage = (props) => {
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
                    src="https://logowik.com/content/uploads/images/twitter-x5265.logowik.com.webp"
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

                <div className="account">
                    <Link to="/signup" className="create-account">Create Account</Link>
                    <span className="policy">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</span>
                </div>
                <div className="alredy-account">
                    <h2>Already have an account?</h2>
                    <Link to="/login" className="sign-in">Login</Link>
                </div>
                <h3>{props.name ? `Welcome - ${props.name}` : "Login Please"}</h3>
            </div>
        </div>
    )
}
export default LoginPage;
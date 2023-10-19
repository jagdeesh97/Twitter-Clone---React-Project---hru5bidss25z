import React from 'react';
import "./SignUp.css";
import { Link, useNavigate } from 'react-router-dom';
import InputControl from '../InputControl/InputControl';
import { useState } from 'react';
import { createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { auth } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const notify = () => toast("Wow so easy!");
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmittion = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Please fill all fields.");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then( async (res) => {
        setSubmitButtonDisabled(false);
        const user  = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        notify();
        <ToastContainer />
        navigate("/login");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className='container'>
      <div className='innerBox'>
        <h1 className='heading'>Sign Up</h1>
        <InputControl
          label="Name :"
          placeholder="Enter your name"
          onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
        />

        <InputControl
          label="Email :"
          placeholder="Enter email address"
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
        />

        <InputControl
          label="Password :"
          placeholder="Enter your password"
          onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
        />

        <div className='footer'>
          <b className='error'>{errorMsg}</b>
          <button onClick={handleSubmittion} disabled={submitButtonDisabled}>
            Sign Up
          </button>
          <p>
            Already have an account?&nbsp;&nbsp;
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

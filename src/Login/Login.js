import React, { useState } from 'react'
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import InputControl from '../InputControl/InputControl';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const notify = () => toast("Wow so easy!");

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        notify();
       
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        toast.error(err.message); // Display error message using toastify
      });
  };

  return (
    <div className='container'>
      <div className='innerBox'>
        <h1 className='heading'>Login</h1>
        <InputControl label="Email :" placeholder="Enter email address"
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />

        <InputControl label="Password :" placeholder="Enter your password"
          onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} />

        <div className='footer'>
          <b className="error">{errorMsg}</b>
          <button  disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
          <p>Don't have an account?&nbsp;&nbsp;
            <span>
              <Link to="/signup" >SignUp</Link>
            </span></p>
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}

export default Login;

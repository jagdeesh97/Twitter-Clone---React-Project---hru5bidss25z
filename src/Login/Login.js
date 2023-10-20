import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import InputControl from '../InputControl/InputControl';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
const navigate = useNavigate();
const [values, setValues] = useState({
email: '',
pass: '',
});
const [errorMsg, setErrorMsg] = useState('');
const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
const [showSuccessAlert, setShowSuccessAlert] = useState(false);

const handleSubmission = () => {
if (!values.email || !values.pass) {
setErrorMsg('Fill all fields');
return;
}
setErrorMsg('');
setSubmitButtonDisabled(true);

signInWithEmailAndPassword(auth, values.email, values.pass)
.then(async (res) => {
setSubmitButtonDisabled(false);
setShowSuccessAlert(true);
setTimeout(() => {
setShowSuccessAlert(false);
navigate('/');
}, 2000); // Hide after 5 seconds and then navigate (adjust as needed)
})
.catch((error) => {
setSubmitButtonDisabled(false);
setErrorMsg('Invalid email or password');
toast.error('Invalid email or password');
});
};

return (
<div className='login-body'>
  <div className='container'>
    <div className='innerBox'>
      <h1 className='heading'>Login</h1>
      <InputControl label='Email :' placeholder='Enter email address' onChange={(event)=> setValues((prev) => ({
        ...prev, email: event.target.value }))}
        />

        <InputControl label='Password :' type="Password" placeholder='Enter your password' onChange={(event)=> setValues((prev) => ({
          ...prev, pass: event.target.value }))}
          />

          <div className='footer'>
            <b className='error'>{errorMsg}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>
              Login
            </button>
            <p>
              Don't have an account?&nbsp;&nbsp;
              <span>
                <Link to='/signup'>SignUp</Link>
              </span>
            </p>
          </div>
    </div>
    <ToastContainer position='top-center' autoClose={10000} hideProgressBar={false} newestOnTop={false} closeOnClick
      rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='colored' />
    {showSuccessAlert && (
    <div className='success-alert'>
      <p>Login successful! Redirecting...</p>
    </div>
    )}
  </div>
</div>
);
};

export default Login;

import './App.css';
import { AuthContextProvider } from './Context/AuthContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './LoginPage';
import Main from './Main';
import Login from './Login/Login';
import SignUp from './SignUp/SingUp';
import { useEffect,useState } from 'react';
import { auth } from './firebase';

function App() {
  const [userName, setUserName] = useState("");
   
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (

    <div className="app">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index path='/' element={<LoginPage />}/>
            <Route  path='/login' element={<Login />}/>
            <Route  path='/signup' element={<SignUp />}/>
            <Route path='/main' element={<Main name={userName} />}/>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>

  );
}

export default App;

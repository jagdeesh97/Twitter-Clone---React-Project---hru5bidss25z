import './App.css';
import { AuthContextProvider } from './Context/AuthContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './LoginPage';
import Main from './Main';

function App() {
  return (

    <div className="app">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index path='/' element={<LoginPage />}/>
            <Route path='/main' element={<Main />}/>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>

  );
}

export default App;

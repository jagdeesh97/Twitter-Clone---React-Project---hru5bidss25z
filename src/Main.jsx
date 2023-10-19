import './App.css';
import SideBar from './SideBar/SideBar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';
import { AuthContextProvider } from './Context/AuthContext';
import TweetContext from './Context/TweetContext';
import { useState, useEffect } from 'react';



function Main() {
  const arr = window.localStorage.getItem('tweetArray')
    ? JSON.parse(window.localStorage.getItem('tweetArray'))
    : [];
  const [tweetArray, setTweetArray] = useState(arr);

  useEffect(() => {
    window.localStorage.setItem('tweetArray', JSON.stringify(tweetArray));
  });

  return (
    <TweetContext.Provider value={{ tweetArray, setTweetArray }}>
      <div className="app">
        <AuthContextProvider>
          <SideBar />

          <Feed />

          <Widgets />

        </AuthContextProvider>
      </div>
    </TweetContext.Provider>
  );
}

export default Main;

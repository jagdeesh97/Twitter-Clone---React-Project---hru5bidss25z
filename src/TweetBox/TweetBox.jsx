import { Avatar, Button } from '@mui/material';
import React, { useContext } from 'react';
import './TweetBox.css';
import { UserAuth } from '../Context/AuthContext';
import { useState, useEffect } from 'react';
import TweetContext from '../Context/TweetContext';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; // Assuming you have a 'db' export from your firebase.js


const TweetBox = () => { const { user } = UserAuth();

const [imgSrc, setImgsrc] = useState('');
const [customImgUrl, setCustomImgUrl] = useState('');
const [inputText, setInputText] = useState('');

const { tweetArray, setTweetArray } = useContext(TweetContext);

const submitHandler = async (e) => {
  e.preventDefault();
  if (inputText.trim() === '') return;

  const newTweet = {
    inputText,
    imgSrc: user.photoURL,
    customImgUrl,
    liked: 0,
    comments: [],
    timestamp: serverTimestamp(),
  };

  // Add the new tweet to Firestore
  const docRef = await addDoc(collection(db, 'tweets'), newTweet);

  setTweetArray([
    ...tweetArray,
    {
      id: docRef.id,
      ...newTweet,
    },
  ]);

  setCustomImgUrl('');
  setInputText('');
};

useEffect(() => {
  if (user) setImgsrc(user.photoURL);
}, [user]);
  return (
    <div className="tweet-box">
      <form>
        <div className="tweet-box-input">
          {/* <Avatar src="https://www.w3schools.com/howto/img_avatar.png" /> */}
          <Avatar src={imgSrc} />
          <input
            type={'text'}
            placeholder="What's happening?"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />
        </div>
        <input
          value={customImgUrl}
          onChange={e => setCustomImgUrl(e.target.value)}
          className="tweet-box-img-input"
          placeholder="Optional: Enter image URL"
        />
        <Button onClick={submitHandler} className="tweet-box-tweet-btn">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;

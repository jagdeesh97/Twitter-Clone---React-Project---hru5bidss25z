import { Avatar, Button } from '@mui/material';
import React, { useContext } from 'react';
import './TweetBox.css';
import { UserAuth } from '../Context/AuthContext';
import { useState, useEffect } from 'react';
import TweetContext from '../Context/TweetContext';

const TweetBox = () => {
	const { user } = UserAuth();

	const [imgSrc, setImgsrc] = useState('');
	const [customImgUrl, setCustomImgUrl] = useState('');
	const [inputText, setInputText] = useState('');

	const { tweetArray, setTweetArray } = useContext(TweetContext);

	const submitHandler = (e) => {
		e.preventDefault();
		if (inputText.trim() === '') return;
		setTweetArray([...tweetArray, { inputText, imgSrc, customImgUrl }]);
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
					{console.log(user.profileImg)}
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

import './App.css';
import SideBar from './SideBar/SideBar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';
import { AuthContextProvider } from './Context/AuthContext';
import Protected from './Protected';
import TweetContext from './Context/TweetContext';
import { useState, useEffect } from 'react';

function App() {
	const arr = window.localStorage.getItem('tweetArray')
		? JSON.parse(window.localStorage.getItem('tweetArray'))
		: [];
	const [tweetArray, setTweetArray] = useState(arr);

	useEffect(() => {
		window.localStorage.setItem('tweetArray', JSON.stringify(tweetArray));
	}, [arr]);

	return (
		<TweetContext.Provider value={{ tweetArray, setTweetArray }}>
			<div className="app">
				<AuthContextProvider>
					<SideBar />
					{/* feed section */}
					<Protected>
						<Feed />
						{/* widgets section */}
						<Widgets />
					</Protected>
				</AuthContextProvider>
			</div>
		</TweetContext.Provider>
	);
}

export default App;

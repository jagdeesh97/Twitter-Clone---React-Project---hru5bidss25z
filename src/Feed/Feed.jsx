import './Feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
import { useContext } from 'react';
import TweetContext from '../Context/TweetContext';

const Feed = () => {
	const { tweetArray } = useContext(TweetContext);
	console.log(tweetArray);
	return (
		<div className="feed">
			{/* Home */}
			<div className="feed-header">
				<h2>Home</h2>
				<h3>For you</h3>
				<h3>Following</h3>
			</div>
			{/* Tweet box */}
			<TweetBox />
			{/* Posts */}
			{tweetArray?.reverse()?.map((item, idx) => (
				<Post key={idx} item={item} />
			))}
		</div>
	);
};

export default Feed;

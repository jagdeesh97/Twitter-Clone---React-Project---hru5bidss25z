import { Avatar } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import React from 'react';
import './Post.css';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import { UserAuth } from '../Context/AuthContext';

const Post = ({ item }) => {
	const { user } = UserAuth();


	return (
		<div className="post">
			<div className="post-avatar">
				<Avatar
					src={item.imgSrc}
					style={{ borderRadius: '100%', height: '40px' }}
				/>
			</div>
			<div className="post-body">
				<div className="post-header">
					<div className="post-header-text">
						<h3>
							{user.displayName}
							<span className="post-header-special">
								<VerifiedUserIcon className="post-badge" />@
								{user.displayName}
							</span>
						</h3>
					</div>
					<div className="post-header-description">
						<p>{item.inputText}</p>
					</div>
				</div>
				<img src={item.customImgUrl} alt="" />
				<div className="post-footer">
					<ChatBubbleOutlineIcon />
					<RepeatIcon />
					<FavoriteBorderIcon />
					<PublishIcon />
				</div>
			</div>
		</div>
	);
};

export default Post;

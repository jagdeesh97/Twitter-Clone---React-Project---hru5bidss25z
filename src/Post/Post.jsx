import { Avatar } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import React from 'react';
import './Post.css';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import { UserAuth } from '../Context/AuthContext';
import { useState } from 'react';
import moment from 'moment';


const Post = ({ item }) => {
  const { user } = UserAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [inputText, setInputText] = useState('');
  const [userComment, setUserComment] = useState({});
  const [display, setDisplay] = useState(false);
  

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
              {user?.displayName}
              <span className="post-header-special">
                <VerifiedUserIcon className="post-badge" />@{user?.displayName}
                {"      "}{"Posted " + moment(item.timestamp).fromNow()}
              </span>
            </h3>
          </div>
          <div className="post-header-description">
            <p>{item.inputText}</p>
          </div>
        </div>
        <img src={item.customImgUrl} alt="" style={{maxWidth: "600px"}}/>
        <div className="post-footer">
          <ChatBubbleOutlineIcon className="icon" onClick={()=>setDisplay(!display) } />
          <RepeatIcon className="icon" />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <span>{item.liked}</span>
            <FavoriteBorderIcon
              onClick={() => {
                setIsLiked(prev => !prev);
                if (isLiked) {
                  item.liked = item.liked - 1;
                } else {
                  item.liked = item.liked + 1;
                }
              }}
              className={`icon ${isLiked ? 'red-color' : ''}`}
            />
          </div>
          <PublishIcon className="icon" />
        </div>
        { display &&
          <div>
            <input
              id='comment-inp'
              type="text"
              placeholder='Write comments...'
              value={inputText}
              onChange={e => {
                setInputText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                if (inputText.trim() === '') {
                  return;
                }
                item.comments = [
                  ...item?.comments,
                  { user: user?.displayName, text: inputText },
                ];
                setUserComment({
                  ...userComment,
                  text: inputText,
                });
                setInputText('');
              }}>
              Comment
            </button>
          </div>
        }
        {display && item?.comments && (
          <div>
            {item?.comments?.map(comment => (
              <div className='comment-section'>
              <Avatar
                   src={item.imgSrc}
                   style={{ borderRadius: '100%', height: '40px' }}
             />
                <div>{comment?.user}
                <VerifiedUserIcon className="post-badge"/>@<span className='post-badge-user'>{user?.displayName}</span>
                </div>
                <p>{comment?.text}</p>                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;

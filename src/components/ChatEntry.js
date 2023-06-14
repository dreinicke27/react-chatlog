import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  // const [isLiked, setIsLiked] = useState(props.liked);
  // const swapLiked = () => {
  //   setIsLiked(!isLiked);
  // };
  
  const onLikeButtonClick = () => {
    const updatedChat  = {
      id: props.id,
      sender: props.sender,
      body: props.body, 
      time: props.time,
      liked: !props.isLiked
    };
    props.onUpdate(updatedChat);
  };

  let buttonContent = props.isLiked ? '❤️' : '🤍'; 
  const id = props.id;
  const location = (id % 2 !== 0) ? 'chat-entry local' : 'chat-entry remote';

  return(
    <div className={location}>
    <h2 className="entry-name">{props.sender}</h2>
    <section className="entry-bubble">
      <p>{props.body}</p>
      <p className="entry-time"><TimeStamp time={props.time}></TimeStamp></p>
      <button onClick={onLikeButtonClick}>{buttonContent}</button>
    </section>
  </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired
};

export default ChatEntry;

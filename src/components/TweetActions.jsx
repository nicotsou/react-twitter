import PropTypes from 'prop-types';
import { FaComment, FaHeart, FaRetweet, FaShare } from 'react-icons/fa';
import './TweetActions.css';

function TweetActions({ counters }) {
  return (
    <ul className="tweet-actions">
      <li>
        <button className="tweet-actions-button">
          <FaComment size="18" /> {counters.comments}
        </button>
      </li>
      <li>
        <button className="tweet-actions-button">
          <FaRetweet size="25" /> {counters.retweets}
        </button>
      </li>
      <li>
        <button className="tweet-actions-button">
          <FaHeart size="18" /> {counters.favorites}
        </button>
      </li>
      <li>
        <button className="tweet-actions-button">
          <FaShare size="18" />
        </button>
      </li>
    </ul>
  );
}

TweetActions.propTypes = {
  counters: PropTypes.shape({
    comments: PropTypes.number,
    retweets: PropTypes.number,
    favorites: PropTypes.number,
  }),
};

export default TweetActions;

import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import { FaComment, FaHeart, FaRetweet, FaShare } from 'react-icons/fa';
import './TweetActions.css';

function TweetActions({ user, content, counters, onRetweet }) {
  const handleShareButtonClick = () => {
    // You have to npm install copy-to-clipboard
    copy(`@${user}: "${content}"`);
  };

  const handleRetweetButtonClick = () => {
    onRetweet(`Retweeted from @${user}: "${content}"`);
  };

  return (
    <ul className="tweet-actions">
      <li>
        <button type="button" className="tweet-actions-button">
          <FaComment size="18" /> {counters.comments}
        </button>
      </li>
      <li>
        <button
          type="button"
          className="tweet-actions-button"
          onClick={handleRetweetButtonClick}
        >
          <FaRetweet size="25" /> {counters.retweets}
        </button>
      </li>
      <li>
        <button type="button" className="tweet-actions-button">
          <FaHeart size="18" /> {counters.favorites}
        </button>
      </li>
      <li>
        <button
          type="button"
          className="tweet-actions-button"
          onClick={handleShareButtonClick}
        >
          <FaShare size="18" />
        </button>
      </li>
    </ul>
  );
}

TweetActions.propTypes = {
  user: PropTypes.string,
  content: PropTypes.string,
  counters: PropTypes.shape({
    comments: PropTypes.number,
    retweets: PropTypes.number,
    favorites: PropTypes.number,
  }),
  onRetweet: PropTypes.func.isRequired,
};

export default TweetActions;

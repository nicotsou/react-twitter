import PropTypes from 'prop-types';
import Tweet from './Tweet.jsx';
import './Timeline.css';
import TweetActions from './TweetActions.jsx';

function Timeline({ tweets, favorites, onRetweet, onToggleFavorite }) {
  return (
    <ul className="timeline">
      {tweets
        .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
        .map(
          ({
            id,
            user,
            created_on,
            content,
            comments_count,
            retweets_count,
            favorites_count,
          }) => {
            const isFavorite = favorites.includes(id);

            return (
              <li key={id} className="timeline-item">
                <Tweet user={user} createdOn={created_on}>
                  {content}
                </Tweet>
                <TweetActions
                  user={user}
                  content={content}
                  favorite={isFavorite}
                  counters={{
                    comments: comments_count,
                    retweets: retweets_count,
                    favorites: favorites_count,
                  }}
                  onRetweet={onRetweet}
                  onToggleFavorite={() => onToggleFavorite(id)}
                />
              </li>
            );
          }
        )}
    </ul>
  );
}

Timeline.propTypes = {
  tweets: PropTypes.array,
  favorites: PropTypes.array,
  onRetweet: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default Timeline;

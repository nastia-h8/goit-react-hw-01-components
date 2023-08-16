import PropTypes from 'prop-types';
import defaultImg from '../../default-image.jpg';

export const Profile = ({
  userData: {
    username,
    tag,
    location,
    avatar = defaultImg,
    stats: { likes, followers, views },
  },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={`${username} avatar`} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{`@${tag}`}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{likes}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{views}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      likes: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

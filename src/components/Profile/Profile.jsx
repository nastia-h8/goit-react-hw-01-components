import PropTypes from 'prop-types';
import defaultImg from '../../default-image.jpg';
import {
  Card,
  Meta,
  Thumb,
  Name,
  Stat,
  StatItem,
  StatLabel,
  StatValue,
} from './Profile.styled';

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
    <Card>
      <Meta>
        <Thumb>
          <img src={avatar} alt={`${username} avatar`} />
        </Thumb>
        <Name>{username}</Name>
        <p>{`@${tag}`}</p>
        <p>{location}</p>
      </Meta>

      <Stat>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatValue>{followers}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>Views</StatLabel>
          <StatValue>{likes}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>Likes</StatLabel>
          <StatValue>{views}</StatValue>
        </StatItem>
      </Stat>
    </Card>
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

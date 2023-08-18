import { ListItem, Status } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <Status>{isOnline}</Status>
      <img src={avatar} alt={`${name} avatar`} width="48" />
      <p>{name}</p>
    </ListItem>
  );
};

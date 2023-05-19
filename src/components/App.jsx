import { Profile } from './SocialProfile/SocialProfile';
import user from './SocialProfile/user.json';

export const App = () => {
  return (
    <Profile
      key={user.username}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

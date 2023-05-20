import { Profile } from './SocialProfile/SocialProfile';
import user from './SocialProfile/user.json';
import { StatisticsList } from './Statistics/StatisticsList';
import data from '../components/Statistics/data.json';
import friends from './FriendList/friends.json';
import transaction from './Transaction/transactions.json';
import Title from './Statistics/Title';
import { FriendList } from './FriendList/FriendList';
import { TransactionTable } from './Transaction/TransactionHistory';
import cssStatistics from './Statistics/Statistics.module.css';

export const App = () => {
  return (
    <div>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <section className={cssStatistics.statistics}>
        <Title title="Upload stats" />
        <StatisticsList data={data} />
      </section>

      <FriendList friends={friends} />

      <TransactionTable transaction={transaction} />
    </div>
  );
};

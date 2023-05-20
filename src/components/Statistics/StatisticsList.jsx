import PropTypes from "prop-types";
import {StatisticsCard} from '../Statistics/StatisticsCard';
import cssStatistics from './Statistics.module.css'


export  function StatisticsList({data}) {
    return (
        <ul className={cssStatistics.list}> 
        {data.map(({ id, label,percentage }) => {
          return (
            <StatisticsCard
              key={id}
              id={id}
              label={label}
              percentage={percentage}
            />
          );
        })}
      </ul>
    )
}

StatisticsList.propTypes = {
data: PropTypes.array
}


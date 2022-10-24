import styles from './activityTeasers.module.scss';
import { ActivityTeaser } from '../ActivityTeaser/ActivityTeaser';
import { GetLoggedInAthleteActivitiesData } from '@nextjsmonorepo/api/generated';

interface IProps {
  activities?: GetLoggedInAthleteActivitiesData;
}

export const ActivityTeasers = (props: IProps) => {
  return (
    <div className={styles['container']}>
      {props.activities?.map((activity) => (
        <ActivityTeaser activity={activity} key={activity.id} />
      ))}
    </div>
  );
};

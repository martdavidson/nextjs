import { useGetActivities } from '@nextjsmonorepo/api/browser';
import styles from './activities.module.scss';
import { Activity } from '../Activity/Activity';

export const Activities = () => {
  const activitiesQuery = useGetActivities();

  return (
    <div className={styles['container']}>
      {activitiesQuery.data?.map((activity) => (
        <Activity activity={activity} key={activity.id} />
      ))}
    </div>
  );
};

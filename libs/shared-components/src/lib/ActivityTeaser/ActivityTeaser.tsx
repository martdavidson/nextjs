import { SummaryActivity } from '@nextjsmonorepo/api/generated';
import styles from './activityTeaser.module.scss';
import Link from 'next/link';

interface IProps {
  activity: SummaryActivity;
}
export const ActivityTeaser = (props: IProps) => {
  return (
    <Link href={`/activity/${props.activity.id}`}>
      <a className={styles['container']}>
        <h3 className={styles['title']}>{props.activity.name}</h3>
        <ul className={styles['stats']}>
          <li>Achievement Count: {props.activity.achievement_count}</li>
          <li>Average Speed: {props.activity.average_speed}</li>
          <li>Average Watts: {props.activity.average_watts}</li>
          <li>Moving Time: {props.activity.moving_time}</li>
        </ul>
      </a>
    </Link>
  );
};

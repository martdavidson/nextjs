import { GetActivityByIdData } from '@nextjsmonorepo/api/generated';

interface IProps {
  activity: GetActivityByIdData;
}
export const Activity = (props: IProps) => {
  return <p>{props.activity.name}</p>;
};

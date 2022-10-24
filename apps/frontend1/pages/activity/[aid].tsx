import { Activity as ActivityLayout } from '@nextjsmonorepo/shared-components';
import { Api, GetActivityByIdData } from '@nextjsmonorepo/api/generated';
import { GetServerSideProps } from 'next';

interface IProps {
  activity: GetActivityByIdData;
}
const Activity = (props: IProps) => {
  return <ActivityLayout activity={props.activity} />;
};

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  context.res.setHeader('Cache-Control', 'public, max-age=10');

  const { aid } = context.query;

  const api = new Api({
    baseApiParams: {
      headers: {
        Authorization: `Bearer ${context.req.cookies.access_token}`,
      },
    },
  });

  const activity = await api.activities.getActivityById({
    id: parseInt(aid as string),
  });
  const activityJSON = await activity.json();

  return {
    props: {
      activity: activityJSON,
    },
  };
};

export default Activity;

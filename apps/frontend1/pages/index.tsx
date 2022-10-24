import {
  ActivityTeasers,
  useAuthenticate,
} from '@nextjsmonorepo/shared-components';
import { GetServerSideProps } from 'next';
import {
  Api,
  GetLoggedInAthleteActivitiesData,
  GetLoggedInAthleteActivitiesError,
} from '@nextjsmonorepo/api/generated';

interface IProps {
  activities?: GetLoggedInAthleteActivitiesData;
  error?: GetLoggedInAthleteActivitiesError;
}

export function Index(props: IProps) {
  useAuthenticate();

  return <ActivityTeasers activities={props.activities} />;
}

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  const api = new Api({
    baseApiParams: {
      headers: {
        Authorization: `Bearer ${context.req.cookies.access_token}`,
      },
    },
  });

  try {
    const activities = await api.athlete.getLoggedInAthleteActivities({});
    const activitiesJSON = await activities.json();

    return {
      props: {
        activities: activitiesJSON,
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default Index;

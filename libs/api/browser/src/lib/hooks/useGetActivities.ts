import useSWR from 'swr';
import { GetLoggedInAthleteActivitiesData } from '@nextjsmonorepo/api/generated';
import { api } from '../api';

export const useGetActivities = () =>
  useSWR<GetLoggedInAthleteActivitiesData>(['activities'], () =>
    api.athlete.getLoggedInAthleteActivities({}).then((res) => res.json())
  );

import { useEffect } from 'react';
import { CLIENT_ID } from '@nextjsmonorepo/api/browser';
import { hasCookie } from 'cookies-next';

export const useAuthenticate = () => {
  useEffect(() => {
    if (!hasCookie('access_token')) {
      window.location.href = `https://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&scope=read,read_all,activity:read,activity:read_all&redirect_uri=${window.location.href}/api/exchange-token`;
    }
  }, []);
};

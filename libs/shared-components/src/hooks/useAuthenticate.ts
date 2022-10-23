import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { CLIENT_ID } from '@nextjsmonorepo/api/browser';

export const useAuthenticate = (accessToken?: string) => {
  const router = useRouter();

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      router.replace('/');
    } else if (!localStorage.getItem('access_token')) {
      window.location.href = `https://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&scope=read,read_all,activity:read,activity:read_all&redirect_uri=${window.location.href}/`;
    }
  }, [accessToken, router]);
};

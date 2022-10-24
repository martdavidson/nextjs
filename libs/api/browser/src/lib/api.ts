import { Api } from '@nextjsmonorepo/api/generated';
import { getCookie } from 'cookies-next';

export const CLIENT_ID = '13620';

export const api = new Api({
  baseApiParams: {
    headers: {
      Authorization: `Bearer ${getCookie('access_token')}`,
    },
  },
});

export const baseUrl = api.baseUrl;

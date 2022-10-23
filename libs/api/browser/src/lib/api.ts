import { Api } from '@nextjsmonorepo/api/generated';

export const CLIENT_ID = '13620';
export const api = new Api({
  baseApiParams: {
    headers:
      typeof window !== 'undefined'
        ? {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          }
        : {},
  },
});

export const baseUrl = api.baseUrl;

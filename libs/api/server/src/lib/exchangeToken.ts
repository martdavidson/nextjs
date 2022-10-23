import { api, CLIENT_ID } from '@nextjsmonorepo/api/browser';

const CLIENT_SECRET = '0166e9e124d09baae386292d21e30570cdbcf263';

export interface IToken {
  token_type: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  access_token: string;
  athlete: {
    country: string;
    profile_medium: string;
    firstname: string;
    follower: null;
    city: string;
    resource_state: number;
    sex: string;
    profile: string;
    bio: string;
    created_at: string;
    weight: number;
    summit: boolean;
    lastname: string;
    premium: boolean;
    updated_at: string;
    badge_type_id: number;
    friend: null;
    id: number;
    state: string;
    username: string;
  };
}

export const exchangeToken = async (code: string): Promise<IToken> => {
  const url = new URL(`${api.baseUrl}/oauth/token`);
  const params = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code,
    grant_type: 'authorization_code',
  };

  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${code}`,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

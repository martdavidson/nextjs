import { NextApiRequest, NextApiResponse } from 'next';
import { exchangeToken } from '@nextjsmonorepo/api/server';
import { setCookie } from 'cookies-next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;

  if (code) {
    const { access_token } = await exchangeToken(code as string);
    setCookie('access_token', access_token, { req, res });
  }

  res.redirect('/');
}

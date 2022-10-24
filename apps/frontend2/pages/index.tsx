import { ActivityTeasers, useAuthenticate } from '@nextjsmonorepo/shared-components';
import { GetServerSideProps } from 'next';
import { exchangeToken } from '@nextjsmonorepo/api/server';

interface IProps {
  accessToken?: string;
}

export function Index(props: IProps) {
  useAuthenticate(props.accessToken);

  return <ActivityTeasers />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { code } = context.query;

  if (code) {
    const { access_token } = await exchangeToken(code as string);

    return {
      props: {
        accessToken: access_token,
      },
    };
  }

  return {
    props: {},
  };
};

export default Index;

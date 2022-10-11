import { unstable_getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SignIn from '../components/sign-in';
import SignUp from '../components/sign-up';
import WithLoadingSpinner from '../components/with-loading-spinner';

import { authConfig } from './api/auth/[...nextauth].js';

const SignInSignUpPage = () => {
  const { status } = useSession();
  const { replace } = useRouter();
  useEffect(() => {
    if (status === 'authenticated') replace('/');
  }, [status, replace]);

  return (
    <WithLoadingSpinner loading={status === 'loading'}>
      <main id="sign-in-sign-up">
        <div className="container-fluid--2">
          <h2>Customer Login</h2>
        </div>

        <div className="container-fluid--2 fb-row">
          <SignIn />

          <SignUp />
        </div>
      </main>
    </WithLoadingSpinner>
  );
};

export async function getServerSideProps({ req, res }) {
  const session = await unstable_getServerSession(req, res, authConfig);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  console.log('sign-in-&-sign-up page is working');
  console.log('session: ', session)
  

  if (session)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };

  return {
    props: {},
  };
}

export default SignInSignUpPage;

import { useSession } from 'next-auth/react';
import Spinner from '../components/with-loading-spinner';
import { useRouter } from 'next/router';
// import { unstable_getServerSession } from 'next-auth';
// import { authConfig } from './api/auth/[...nextauth]';

const FavouritesPage = () => {
  const { push } = useRouter();
  const { status } = useSession();
  if (status === 'unauthenticated') push('/');

  return (
    <Spinner loading={status === 'loading' || status === 'unauthenticated'}>
      <main>
        <h2>Favourites</h2>
      </main>
    </Spinner>
  );
};

// export const getServerSideProps = async context => {
//   const session = await unstable_getServerSession(
//     context.req,
//     context.res,
//     authConfig
//   );
//   console.log('server session nimadir: ', session);

//   if (!session)
//     return {
//       redirect: {
//         destination: '/sign-in-sign-up',
//         permanent: false,
//       },
//     };

//   return {
//     props: {},
//     redirect: '/',
//   };
// };

export default FavouritesPage;

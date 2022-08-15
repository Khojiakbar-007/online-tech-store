import { TextField, Button } from '@mui/material';

import { useForm } from 'react-hook-form';

import { unstable_getServerSession } from 'next-auth';
import { authConfig } from './api/auth/[...nextauth]';
import axios from 'axios';

function ProfilePage() {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = data => {
    axios.patch('/api/user/change-password', data);
    console.log('bosilvotti');
  };
  return (
    <main>
      <h1>
        Heyyyyyy! <br /> &nbsp; &ensp; &emsp; This is your Profile Page!
      </h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField
          {...register('oldPassword')}
          required
          label="Old Password"
          type="password"
        />
        <TextField
          {...register('newPassword')}
          required
          label="New Password"
          type="password"
        />
        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authConfig);

  if (!session)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };

  return {
    props: {},
  };
};

export default ProfilePage;

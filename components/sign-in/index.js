import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

import SimpleButton from '../shared/button/simple-button';

function SignIn() {
  const { handleSubmit, register, reset, setError, clearErrors } = useForm();

  const handleFormSubmit = async data => {
    // axios
    //   .post('/api/sign-up', data)
    //   .then(res => console.log(res))
    //   .catch(err => console.log('ERROR: ', err));
    const result = await signIn('credentials', { redirect: false, ...data });

    console.log('api next-auth sign in result: ', result);

    reset();
  };

  return (
    <section className="sign-up signing-card">
      <h4>Registered Customers</h4>
      <p>If you have an account, sign in with your email address.</p>

      <form className="fb-col" onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField required {...register('email')} type="email" label="Email" />
        {/* prettier-ignore */}
        <TextField required {...register('password')} type="password" label="Password" />
        <SimpleButton type="submit" width={150}>
          Sign In
        </SimpleButton>
      </form>
    </section>
  );
}

export default SignIn;

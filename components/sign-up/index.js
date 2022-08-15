import axios from 'axios';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';

import SimpleButton from '../shared/button/simple-button';

function SignUp() {
  const { handleSubmit, register, reset, setError, clearErrors } = useForm();

  const handleFormSubmit = data => {
    axios
      .post('/api/sign-up', data)
      .then(res => {
        console.log('api response: ', res);
      })
      .catch(err => console.log('ERROR: ', err));

    // reset();
  };

  return (
    <section className="sign-up signing-card">
      <h4>New Customer?</h4>
      <p>Creating an account has many benefits:</p>

      <ul>
        <li>Check out faster</li>
        <li>Keep more than one address</li>
        <li>Track orders and more</li>
      </ul>

      <form className="fb-col" onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField required {...register('name')} label="Name" />
        <TextField required {...register('email')} type="email" label="Email" />
        {/* prettier-ignore */}
        <TextField required {...register('password')} type="password" label="Password" />
        <SimpleButton type="submit" width={208}>
          Create An Account
        </SimpleButton>
      </form>
    </section>
  );
}

export default SignUp;

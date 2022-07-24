import SimpleButton from '../components/shared/button/simple-button';

const SignInSignUpPage = () => {

  return (
    <main id="sign-in-sign-up">
      <div className="container-fluid">
        <h2>Customer Login</h2>
      </div>

      <div className="container-fluid--2 fb-row">
        <section className="sign-in signing-card">
          <h4>Registered Customers</h4>
          <p>If you have an account, sign in with your email address.</p>
          <SimpleButton width={150}>Sign In</SimpleButton>
        </section>

        <section className="sign-up signing-card">
          <h4>New Customer?</h4>
          <p>Creating an account has many benefits:</p>

          <ul>
            <li>Check out faster</li>
            <li>Keep more than one address</li>
            <li>Track orders and more</li>
          </ul>

          <SimpleButton width={208}>Create An Account</SimpleButton>
        </section>
      </div>
    </main>
  );
};

export default SignInSignUpPage;

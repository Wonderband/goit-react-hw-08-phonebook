import { LoginForm } from 'components/LoginForm/LoginForm';
import { Section } from 'components/Section/Section';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  return (
    <Section>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Section>
  );
};

export default LoginPage;

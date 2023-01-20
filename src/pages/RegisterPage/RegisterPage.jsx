// import { Helmet } from 'react-helmet';
import { Section } from 'components/Section/Section';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

export const RegisterPage = () => {
  return (
    <Section>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Section>
  );
};

// import { Helmet } from 'react-helmet';
import { Section } from 'components/Section/Section';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const RegisterPage = () => {
  return (
    <Section>
      <div>
        {/* <Helmet>
          <title>Registration</title>
        </Helmet> */}
        <RegisterForm />
      </div>
    </Section>
  );
};

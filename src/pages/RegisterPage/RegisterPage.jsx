// import { Helmet } from 'react-helmet';

import { Section } from 'components/Section/Section';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';

export const RegisterPage = () => {
  const userInfo = useSelector(selectUser);
  return (
    <Section>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
      <h2>{userInfo && userInfo.user.name}</h2>
      <h2>{userInfo.user && userInfo.user.email}</h2>
      <h2>{userInfo.token}</h2>
    </Section>
  );
};

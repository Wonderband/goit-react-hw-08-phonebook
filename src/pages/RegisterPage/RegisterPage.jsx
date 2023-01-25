// import { Helmet } from 'react-helmet';

import { Section } from 'components/Section/Section';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet-async';
// import { selectIsLogged, selectUser } from 'redux/selectors';
// import { useSelector } from 'react-redux';
// import Notiflix from 'notiflix';
// import { selectUser } from 'redux/selectors';

const RegisterPage = () => {
  return (
    <Section>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Section>
  );
};

export default RegisterPage;

import { Section } from 'components/Section/Section';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <Section>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <p> Im Homepage!</p>
    </Section>
  );
};

export default HomePage;

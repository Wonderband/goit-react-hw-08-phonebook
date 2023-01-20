import { Section } from 'components/Section/Section';
import { Helmet } from 'react-helmet';

export const Homepage = () => {
  return (
    <Section>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <p> Im Homepage!</p>
    </Section>
  );
};

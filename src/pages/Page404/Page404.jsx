import { Section } from 'components/Section/Section';
import { Helmet } from 'react-helmet-async';

export const Page404 = () => {
  return (
    <Section>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <h1>Page not found!</h1>
    </Section>
  );
};

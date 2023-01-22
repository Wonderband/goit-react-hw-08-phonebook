import { Section } from 'components/Section/Section';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Helmet } from 'react-helmet-async';

export const ContactsPage = () => {
  return (
    <Section>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <p>My contacts</p>
      {/* <UserMenu /> */}
    </Section>
  );
};

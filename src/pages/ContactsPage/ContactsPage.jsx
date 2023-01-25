import { Section } from 'components/Section/Section';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Helmet } from 'react-helmet-async';
import { Filter } from 'components/Filter/Filter';
// import { ContactList } from 'components/ContactsList/ContactsList';

const ContactsPage = () => {
  return (
    <Section>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <Filter />
      {/* <ContactList /> */}
    </Section>
  );
};

export default ContactsPage;

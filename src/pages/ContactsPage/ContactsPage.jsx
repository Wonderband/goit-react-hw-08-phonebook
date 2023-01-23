import { Section } from 'components/Section/Section';
// import { Filter } from '../Filter/Filter';
import { ContactForm } from '../../components/ContactForm/ContactForm';
// import { ContactList } from '../../Components/ContactList/ContactList';
import { Helmet } from 'react-helmet-async';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';

export const ContactsPage = () => {
  return (
    <Section>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <h2>My contacts</h2>
      <Filter />
      <ContactList />
    </Section>
  );
};

// import React from 'react';

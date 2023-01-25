import { ListItem } from 'components/ListItem/ListItem';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectFilter } from 'redux/selectors';
import css from './ContactsList.module.css';

export const ContactList = () => {
  const { contactsArray } = useSelector(state => state.contacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ul className={css.list}>
      <h2>My contacts: </h2>
      {contactsArray
        .filter(item => item.name.toLowerCase().includes(filter))
        .map(item => {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
            />
          );
        })}
      {contactsArray.length === 0 && <p>You have no contacts!</p>}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

import { ContactList } from 'components/ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from '../../redux/filter/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const filterHandle = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };
  return (
    <div className={css.contactsHead}>
      <ContactList />
      {/* <p></p> */}

      <label className={css.labelFilter}>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          className={css.input}
          title="Find the name!"
          value={filter}
          onChange={filterHandle}
        />
      </label>
    </div>
  );
};

import React from 'react';
import { useDispatch } from 'react-redux';
import { SearchByName } from 'redux/contactsReducer';
import css from '../Filter/Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterOnChange = event => {
    dispatch(SearchByName(event.currentTarget.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.imputName}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={filterOnChange}
      />
    </label>
  );
};

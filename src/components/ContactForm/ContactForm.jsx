import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactOperation';
import css from '../ContactForm/ContactForm.module.css';
import { nanoid } from '@reduxjs/toolkit';

export function ContactForm() {
  const dispatch = useDispatch();
  const userName = useSelector(getContacts).map(contact => contact.name);

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target;

    if (userName.includes(name.value)) {
      alert(`${name.value} is already in your contact`);
      return;
    }

    const data = {
      createdAt: new Date().toISOString(),
      name: name.value,
      phone: number.value,
      id: nanoid(),
    };

    dispatch(addContact(data));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.labelName}>
        <span className={css.spanName}>Name</span>
        <input
          className={css.imputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={css.labelNumber}>
          <span className={css.spanNumber}>Number</span>

          <input
            className={css.imputName}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.buttonSubmit}>
          Add contact
        </button>
      </label>
    </form>
  );
}

import css from '../ContactList/ContactList.module.css';
import { DeleteContact } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactOperation';
import { useEffect } from 'react';
import { getContacts, getFilter } from '../../redux/selectors';

// import PropTypes from 'prop-types';

export const ContactList = () => {
  // const filter = useSelector(getFilter);
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter)
  // );

  const contacts = useSelector(getContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    contacts.length > 0 && (
      <ul className={css.list}>
        {contacts.map(contact => {
          return (
            <li className={css.item} key={contact.id}>
              {contact.name} : {contact.phone}
              <button
                className={css.item__button}
                onClick={() => dispatch(DeleteContact(contact.id))}
              >
                Видалити
              </button>
            </li>
          );
        })}
      </ul>
    )
  );
};

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };

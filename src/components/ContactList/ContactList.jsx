import css from '../ContactList/ContactList.module.css';
import { DeleteContact } from 'redux/contactsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactOperation';
import { useEffect } from 'react';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from '../../redux/selectors';

// import PropTypes from 'prop-types';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const filter = useSelector(getFilter);
  const error = useSelector(getError);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log(contacts);
  return (
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <ul className={css.list}>
          {visibleContacts.map(contact => {
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
      )}
    </>
  );
};

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };

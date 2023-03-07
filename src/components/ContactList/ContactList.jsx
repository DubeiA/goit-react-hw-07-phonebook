import css from '../ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';
import { DeleteContact } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

// import PropTypes from 'prop-types';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            {contact.name} : {contact.number}
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
  );
};

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };

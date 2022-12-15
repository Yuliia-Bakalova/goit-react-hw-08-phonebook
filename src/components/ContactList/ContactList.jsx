import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import {  Item,  List,  Button,} from './ContactList.styled';


export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filtered = filterContacts();

  return (
    <List>
      {filtered.map(({ id, name, number }) => (
        <Item key={id}>
            {name} : {number}
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};


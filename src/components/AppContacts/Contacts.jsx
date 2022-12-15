import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Container, Title } from './Contacts.styled';
import { ThreeCircles } from 'react-loader-spinner';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook </Title>
      <ContactForm />
      <Title>Contacts </Title>
      <Filter />
       <ThreeCircles
          height="40"
          width="40"
          color="#c8c819"
          wrapperStyle={{}}
          wrapperClass="spinner"
          visible={isLoading}
          ariaLabel="three-circles-rotating"
      />
      <ContactList />
    </Container>
  );
};

export default Contacts;

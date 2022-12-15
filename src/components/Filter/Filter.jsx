import { useDispatch } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { filterContacts } from 'redux/contacts/slices/filterSlice';


export const Filter = () => {
  const dispatch = useDispatch();

  const contactSearch = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <Label>
      Search
      <Input
        type="text"
        name="filter"
        placeholder="Start typing a name"
        onChange={contactSearch}
      ></Input>
    </Label>
  );
};

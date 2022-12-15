import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Link } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">PhoneBook</Link>}
    </nav>
  );
};

export default Navigation;

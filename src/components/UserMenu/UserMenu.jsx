import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Wrap, User, OutBtn } from './UserMenu.styled';
import { ImExit } from 'react-icons/im';


const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrap>
      <User>Welcome, {user.name}!</User>
      <OutBtn type="button" onClick={() => dispatch(logOut())}>
        <ImExit size={25} />
      </OutBtn>
    </Wrap>
  );
};

export default UserMenu;

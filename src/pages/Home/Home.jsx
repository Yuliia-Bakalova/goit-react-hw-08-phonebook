import { BsArrowRightSquare } from 'react-icons/bs';
import { Box, Title, Text, Link, Svg } from './Home.styled';

const Home = () => {
  return (
    <Box>
      <Title>
        Welcome to your private PhoneBook!
      </Title>
      <Text>
        To take advantage of all the features, Register or Log In.
      </Text>
      <Link to="/contacts">
        Log In
        <Svg>
          <BsArrowRightSquare size={30} />
        </Svg>
      </Link>
    </Box>
  );
};
export default Home;

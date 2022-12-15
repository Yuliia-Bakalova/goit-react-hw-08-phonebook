import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 60vh;
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: baseline;
  color: ${p => p.theme.colors.colorTitle};
  font-size: 50px;
 
`;
const Text = styled.h2`
  margin-bottom: 50px;
  margin-top: 60px;
  color: ${p => p.theme.colors.colorTitle};
 
`;
const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 30px;
  font-weight: 700;
  background-color: ${p => p.theme.colors.colorBtn};
  color: ${p => p.theme.colors.borderBtn};
  border: 1px solid #377856;
  width: 160px;
  height: 50px;
  border-radius: 15px;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.homeLinkHover};
    background-color: ${p => p.theme.colors.homeLink};
  }
`;

const Svg = styled.span`
  margin-left: 10px;
  margin-top: 5px;
`;

export { Box, Title, Text, Link, Svg };

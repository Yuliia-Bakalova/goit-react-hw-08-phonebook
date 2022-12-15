import styled from 'styled-components';

export const Container =styled.div`
padding: 20px;
margin-right:auto;
margin-left:auto;
margin-top:30px;
width:500px;
font-size: 16px;
font-weight:700;
color: ${p => p.theme.colors.dark};
background-color: ${p => p.theme.colors.colorBg};
box-shadow: ${p => p.theme.colors.boxShadow};
border-radius: 20px;
`;


export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin-bottom: 20px;
 color: ${p => p.theme.colors.colorTitle};
`;

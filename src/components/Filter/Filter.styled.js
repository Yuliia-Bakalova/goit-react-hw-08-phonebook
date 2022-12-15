import styled from 'styled-components';


export const Input = styled.input`
  margin-left: 20px;
  height: 25px;
  border-radius: 10px;
  border: 1px solid ${p => p.theme.colors.colorInputBorder};
  outline: none;
  padding: 0 5px 0 10px;
  font-size: 16px;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.colorInput};
  transition: all 250ms linear;
  cursor: pointer;
 :hover, 
 :focus {
  border-color: ${p => p.theme.colors.accentBorderInput};
    background-color:${p => p.theme.colors.accentInput};
 }
`;

export const Label = styled.label`
padding: 10px;
font-size: 16px;
margin-left: 30px;
`;

import styled from 'styled-components';

const List = styled.ul`
 list-style: none;
  width: 430px;
  margin: 0;
  padding: 30px;
  margin-bottom: 40px;
  border: ${p => p.theme.colors.borderList};
  border-radius: 5px;
  background: ${p => p.theme.colors.colorBgList};
  box-shadow:${p => p.theme.colors.boxShadowList};
`;
const Item = styled.li`
  display: flex;
 justify-content: space-between;
 list-style: none;
    :first-child {
        margin-top:20px;
    }
    :not(:last-child) {
        margin-bottom:15px;
    }
`;

const Button = styled.button`
padding: 4px 5px;
width: 80px;
border-radius: 10px;
border: ${p => p.theme.colors.deleteBtnBorder};
cursor: pointer;
background-color: ${p => p.theme.colors.deleteBtn};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        background-color: ${p => p.theme.colors.deleteBtnAccent};
    }
`;

export {  Item, List, Button};
   
  

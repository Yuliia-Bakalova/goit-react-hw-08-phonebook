import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;


export const User = styled.p`
  font-weight: 700;
  color:${p => p.theme.colors.colorTitle};
`;

export const OutBtn = styled.button`
  background-color: transparent;
  border-color: transparent;
  color: ${p => p.theme.colors.colorTitle};
  padding: 0;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.deleteBtnAccent};
  }
`;

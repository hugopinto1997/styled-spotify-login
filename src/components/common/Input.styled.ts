import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  outline: none;
  padding: 1.4rem;
  border: 1px solid ${({ theme }) => theme.palette.common.black};
`;

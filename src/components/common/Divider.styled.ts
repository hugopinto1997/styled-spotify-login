import styled from 'styled-components';

export const TextDivider = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  color: ${({ theme }) => theme.palette.common.tertiary};
  font-size: 1.2rem;
  margin: 1rem 0;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: currentColor;
  }

  &::before {
    margin-right: 1.6rem;
  }

  &::after {
    margin-left: 1.6rem;
  }
`;

export const Hr = styled.hr`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.common.tertiary};
  margin: 1rem 0;
`;

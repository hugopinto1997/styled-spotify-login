import styled from 'styled-components';

import { CenterAlignedFlex } from 'components/common/Flex.styled';

export const Check = styled.input.attrs({ type: 'checkbox' })`
  display: inline-block;
  border-radius: 3px;
  height: 1.6rem;
  width: 1.6rem;
  flex-shrink: 0;
  background-color: transparent;

  &:checked {
    background-color: ${({ theme }) => theme.palette.common.secondary};
  }

  &:not(:checked) {
    background-color: transparent;
  }
`;

export const CheckboxLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1.25px;
  padding-left: 1.2rem;
`;

export const Wrapper = styled(CenterAlignedFlex)`
  padding-bottom: 1.6rem;
`;

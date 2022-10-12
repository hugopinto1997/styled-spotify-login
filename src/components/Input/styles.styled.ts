import styled from 'styled-components';

import { Input } from 'components/common/Input.styled';

export const InputLabel = styled.label`
  display: inline-flex;
  width: fit-content;
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: normal;
  font-weight: 800;
  padding-bottom: 0.8rem;
`;

export const CustomInput = styled(Input)`
  font-size: 1.6rem;
  line-height: 2rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.palette.common.tertiary};
  color: ${({ theme }) => theme.palette.common.black};
`;

export const InputError = styled.span`
  display: block;
  color: rgb(186, 16, 33);
  font-size: 1.2rem;
  padding-top: 0.8rem;
  padding-left: 0.8rem;
`;

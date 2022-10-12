/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-comment-textnodes */
import { StyledComponentPropsWithRef } from 'styled-components';

import Flex from 'components/common/Flex.styled';

import { CustomInput, InputError, InputLabel } from './styles.styled';

const defaultProps = {
  labelText: '',
  errorText: undefined,
};

type InputProps = {
  labelText?: string;
  errorText?: string | undefined;
} & StyledComponentPropsWithRef<typeof CustomInput>;

const Input = ({ labelText, errorText, name, id, ...rest }: InputProps) => {
  return (
    <Flex direction="column">
      {labelText && <InputLabel htmlFor={id}>{labelText}</InputLabel>}
      <CustomInput name={name} id={id} {...rest} />
      {errorText && <InputError>{errorText}</InputError>}
    </Flex>
  );
};

Input.defaultProps = defaultProps;
export default Input;

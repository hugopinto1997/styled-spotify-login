import { InferComponentProps } from 'interfaces/generics.interface';

import { Check, CheckboxLabel, Wrapper } from './styles.styled';

type CheckboxProps = {
  labelText?: string;
} & Omit<InferComponentProps<typeof Check>, 'type'>;

const Checkbox = ({ labelText, name, ...rest }: CheckboxProps) => {
  return (
    <Wrapper>
      <Check type="checkbox" name={name} id={name} {...rest} />
      <CheckboxLabel htmlFor={name}>{labelText}</CheckboxLabel>
    </Wrapper>
  );
};

Checkbox.defaultProps = {
  labelText: '',
};

export default Checkbox;

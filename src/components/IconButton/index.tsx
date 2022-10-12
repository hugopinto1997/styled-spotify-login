import { StyledComponentPropsWithRef } from 'styled-components';

import { Button, ButtonVariants } from 'components/common/Button.styled';

import { Icon } from './styles.styled';

const defaultProps = {
  iconSide: 'left',
  variant: 'default',
};

type IconButtonProps = {
  icon: JSX.Element;
  iconSide?: 'left' | 'right';
  text: string;
  variant?: ButtonVariants;
} & typeof defaultProps &
  StyledComponentPropsWithRef<typeof Button>;

const IconButton = ({
  children,
  text,
  icon,
  iconSide,
  variant,
  ...rest
}: IconButtonProps) => {
  return (
    <Button variant={variant} {...rest}>
      <>
        {iconSide === 'left' && <Icon side={iconSide}>{icon}</Icon>}
        {text} {children}
        {iconSide === 'right' && <Icon side={iconSide}>{icon}</Icon>}
      </>
    </Button>
  );
};
IconButton.defaultProps = defaultProps;
export default IconButton;

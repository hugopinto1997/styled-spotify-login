import styled, { css } from 'styled-components';

import { ThemeData } from 'styles/theme';

export type ButtonVariants =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'facebook'
  | 'apple'
  | 'tertiary';

export type ButtonProps = {
  variant: ButtonVariants;
};

const variantStyles = (
  { palette }: ThemeData,
  variant: ButtonVariants = 'default',
) =>
  ({
    default: css`
      border: 1px solid ${palette.common.primary};
      background-color: transparent;
      color: ${palette.common.black};
    `,
    primary: css`
      border: none;
      background-color: ${palette.common.primary};
      color: ${palette.common.white};
    `,
    secondary: css`
      border: 1px solid ${palette.common.tertiary};
      background-color: transparent;
      color: ${palette.common.secondary};
    `,
    tertiary: css`
      background-color: ${palette.common.white};
      color: ${palette.common.secondary};
    `,
    facebook: css`
      border: none;
      background-color: ${palette.common.facebookBlue};
      color: ${palette.common.white};
    `,
    apple: css`
      border: none;
      background-color: ${palette.common.black};
      color: ${palette.common.white};
    `,
  }[variant]);

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 3.1rem;
  border-radius: 50rem;
  text-transform: uppercase;
  outline: none;
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: 2px;
  font-size: 1.3rem;
  cursor: pointer;
  ${(props) => variantStyles(props.theme, props.variant)}
`;

export const Link = styled.a`
  display: inline-flex;
  width: fit-content;
  color: ${({ theme }) => theme.palette.common.black};
  text-decoration: none;
  font-size: 1.6rem;

  &:hover {
    text-decoration: underline;
    cursor: text;
  }
`;

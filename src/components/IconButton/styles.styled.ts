import styled, { css } from 'styled-components';

import { devices } from 'styles/breakpoints';

export type IconProps = {
  side: 'left' | 'right';
};

export const Icon = styled.div<IconProps>`
  font-size: 2rem;
  color: currentColor;
  fill: currentColor;
  ${(props) =>
    props.side === 'left'
      ? css`
          margin-right: 1rem;
        `
      : css`
          margin-left: 1rem;
        `}

  @media ${devices.phoneLarge} {
    display: none;
  }
`;

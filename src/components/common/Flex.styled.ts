import styled, { css } from 'styled-components';

type FlexProps = {
  direction?: string;
  justify?: string;
  items?: string;
};

const Flex = styled.div<FlexProps>`
  display: flex;
  ${(props: FlexProps) =>
    props.direction
      ? css`
          flex-direction: ${props.direction};
        `
      : ''};
  ${(props: FlexProps) =>
    props.items
      ? css`
          align-items: ${props.items};
        `
      : ''};
  ${(props: FlexProps) =>
    props.justify
      ? css`
          justify-content: ${props.justify};
        `
      : ''};
`;

export const CenterAlignedFlex = styled(Flex)`
  align-items: center;
  align-self: stretch;
`;

export default Flex;

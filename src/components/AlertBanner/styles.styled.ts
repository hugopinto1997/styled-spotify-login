import styled, { css } from 'styled-components';

import { Paragraph } from 'components/common/Text.styled';

export type AlertBannerProps = {
  type: 'error' | 'success';
  hidden: boolean;
};

export const AlertBanner = styled.div<AlertBannerProps>`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  padding: 0 1.6rem;
  border-radius: 4px;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.palette.common.white};
  ${(props: AlertBannerProps) =>
    props.type !== 'success'
      ? css`
          background-color: ${({ theme }) => theme.palette.common.red};
        `
      : css`
          background-color: green;
        `}
`;

export const AlertText = styled(Paragraph)`
  display: inline-block;
  font-weight: 400;
  padding: 0;
  white-space: normal;
  line-break: strict;
`;

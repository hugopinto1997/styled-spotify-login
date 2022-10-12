import styled from 'styled-components';

import Flex from 'components/common/Flex.styled';
import { devices } from 'styles/breakpoints';

export const FormContainer = styled.div`
  max-width: 45rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  @media ${devices.tabletPortrait} {
    padding: 0 2rem;
    max-width: 100%;
    width: 100%;
  }
`;

export const FormHeadingSection = styled(Flex)`
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem 0;
  margin-top: 0;
`;

export const FormContentSection = styled(Flex)`
  flex-direction: column;
  margin-bottom: 1.6rem;
  row-gap: 1.6rem;
`;

export const FormFooterSection = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin-top: 1.6rem;

  @media ${devices.tabletPortrait} {
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
  }
`;

export const FormInfoSection = styled(Flex)`
  flex-direction: column;
  margin: 1rem 0;
`;

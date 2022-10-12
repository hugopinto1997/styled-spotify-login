import styled from 'styled-components';

import { ReactComponent as SpotifyLogo } from 'assets/icons/spotify.svg';
import { devices } from 'styles/breakpoints';

import { fadeIn } from '../../styles/animations';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.common.secondary};
  padding-top: 2.5rem;
  padding-bottom: 1rem;
  margin-bottom: 3rem;

  @media ${devices.tabletPortrait} {
    padding: 0 2rem;
    max-width: 100%;
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  height: 6.7rem;
  padding-bottom: 1.2rem;
  animation: ${fadeIn} 2s linear;
`;

export const Logo = styled(SpotifyLogo)`
  height: 100%;
  fill: ${({ theme }) => theme.palette.common.black};
`;

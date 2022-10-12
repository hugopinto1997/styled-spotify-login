import { memo } from 'react';

import { Header, Logo, LogoWrapper } from './styles.styled';

const Navbar = () => {
  return (
    <Header>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </Header>
  );
};

export default memo(Navbar);

import { memo, ReactNode } from 'react';

import Navbar from 'components/Navbar';

import { LayoutContainer } from './styles.styled';

type BasicLayoutProps = {
  children: ReactNode;
};

const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
    </LayoutContainer>
  );
};

export default memo(BasicLayout);

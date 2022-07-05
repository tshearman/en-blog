import React, { useState } from 'react';

import * as Styled from './styles';

interface MainNavItem {
  title: string;
  slug: string;
}

const mainNavItems: MainNavItem[] = [
  {
    title: 'Posts',
    slug: '/'
  },
  {
    title: 'Archive',
    slug: '/archive/'
  },
  {
    title: 'Resume',
    slug: '/resume/'
  }
];

const MainNav: React.FC = () => {
  return (
    <>
      <Styled.MainNav>
        {mainNavItems.map((item, index) => (
          <Styled.MainNavItem
            key={`nav-item-${index}`}
            to={item.slug}
            activeClassName="active"
            whileTap={{ scale: 0.9 }}
          >
            {item.title}
          </Styled.MainNavItem>
        ))}
      </Styled.MainNav>
    </>
  );
};

export default MainNav;

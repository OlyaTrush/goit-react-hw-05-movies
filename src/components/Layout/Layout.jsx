import { Outlet } from 'react-router-dom';
import { Nav, NavLinkStyled } from '../AppBar/AppBar.styled';

import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export const SharedLayout= () => {
  return (
    <>
      <Nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/movies">Movies</NavLinkStyled>
    </Nav>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

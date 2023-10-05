import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: white;
  font-size: 25px;
  &.active {
    color: orange;
  }
`;

function Layout() {
  return (
    <>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;

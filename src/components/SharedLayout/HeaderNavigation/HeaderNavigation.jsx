import {
  StyledNavigation,
  LogoLink,
  Logo,
  NavigationContainer,
  NavigationLink,
} from './HeaderNavigation.styled';

export const HeaderNavigation = () => (
  <StyledNavigation>
    <LogoLink to="/">
      <Logo>Filmoteka</Logo>
    </LogoLink>
    <NavigationContainer>
      <NavigationLink to="/" end>
        Home
      </NavigationLink>
      <NavigationLink to="/movies">Movies</NavigationLink>
    </NavigationContainer>
  </StyledNavigation>
);

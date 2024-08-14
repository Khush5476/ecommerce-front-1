import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import Center from './Center';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import BarsIcon from './Bars';

const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const fadeInOutAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledHeader = styled.header`
  background-color: #222;
  position: fixed; /* Fix the header at the top */
  top: 0; /* Align to the top of the viewport */
  left: 0; /* Stretch to the left edge of the viewport */
  right: 0; /* Stretch to the right edge of the viewport */
  z-index: 1000; /* Ensure it's above other content */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  max-width: 1200px; /* Optionally, constrain the maximum width */
  margin: 0 auto; /* Center the header content */
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
  height: 35px;

  &:hover {
    animation: ${hoverAnimation} 0.3s ease;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
  padding: 20px;
  background-color: #222;
  opacity: ${props => (props.navActive ? 1 : 0)};
  transform: translateX(${props => (props.navActive ? '0' : '-100%')});
  transition: opacity 0.3s ease, transform 0.3s ease;

  @media screen and (min-width: 768px) {
    position: static; /* Reset position for larger screens */
    padding: 0;
    opacity: 1;
    transform: translateY(0);
    display: flex; /* Ensure it displays as flex */

  }
`;

const NavLink = styled(Link)`
  display: block;
  color: ${({ isActive }) => (isActive ? 'white' : '#aaa')};
  text-decoration: none;
  padding: 10px 0;

  @media screen and (min-width: 768px) {
    padding: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  &:hover {
    animation: ${hoverAnimation} 0.3s ease;
    color: white;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 100;
  transition: opacity 0.3s ease, transform 0.3s ease;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProjects } = useContext(CartContext);
  const [navActive, setNavActive] = useState(false);
  const router = useRouter();

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href="/">Company</Logo>
          <StyledNav navActive={navActive}>
            <NavLink href={'/'} isActive={router.pathname === '/'}>
              Home
            </NavLink>
            <NavLink href={'/projects'} isActive={router.pathname === '/projects'}>
              All Projects
            </NavLink>
            <NavLink href={'/Email'} isActive={router.pathname === '/Email'}>
              Email Me
            </NavLink>
            <NavLink href={'/Services'} isActive={router.pathname === '/Services'}>
              Our Services
            </NavLink>
          </StyledNav>

          <NavButton onClick={() => setNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

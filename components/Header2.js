import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import Center from './Center';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import BarsIcon from './Icons/Bars';

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
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;

  &:hover {
    animation: ${hoverAnimation} 0.3s ease;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${({ navActive }) =>
    navActive
      ? `
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    `
      : `
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
    `}
  position: fixed;
  gap: 15px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  transition: opacity 0.3s ease, transform 0.3s ease; /* Added transition for smooth display change */

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0px;
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: ${({ isActive }) => (isActive ? 'white' : '#aaa')};
  text-decoration: none;
  padding: 10px 0;

  @media screen and (min-width: 768px) {
    padding: 0;
  }

  &:hover {
    animation: ${hoverAnimation} 0.3s ease;
    color: white;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
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
            <NavLink href="/" isActive={router.pathname === '/'}>
              Home
            </NavLink>
            <NavLink href="/projects" isActive={router.pathname === '/projects'}>
              All Projects
            </NavLink>
            <NavLink href="/Email" isActive={router.pathname === '/Email'}>
              Email Me
            </NavLink>
            {/* <NavLink href="/account">Account</NavLink> */}
            {/* <NavLink href="/cart">Cart ({cartProjects.length})</NavLink> */}
          </StyledNav>

          <NavButton onClick={() => setNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

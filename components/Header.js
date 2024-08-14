import { useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import Center from './Center';
import { useContext, useState, useEffect } from 'react';
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

const StyledHeader = styled.header`
  background-color: #222;
  position: fixed; /* Fixed position for larger screens */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Ensure it's above other content */
  transition: background-color 0.3s ease;

  @media screen and (max-width: 768px) {
    position: static; /* Static position for mobile screens */
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  max-width: 1200px;
  margin: 0 auto;
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
  background-color: #222;
  padding: 20px;
  opacity: ${props => (props.navActive ? 1 : 0)};
  transform: translateX(${props => (props.navActive ? '0' : '-100%')});
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: fixed; /* Always fixed for desktop */
  top: 60px; /* Adjust based on header height */

  @media screen and (max-width: 768px) {
    position: static; /* Static position for mobile screens */
    padding: 20px 0;
    opacity: 1;
    transform: translateY(0);
    display: ${props => (props.navActive ? 'flex' : 'none')}; /* Display only when active */
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
    display: none; /* Hide button on larger screens */
  }
`;

export default function Header() {
  const { cartProjects } = useContext(CartContext);
  const [navActive, setNavActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // This function runs only on the client side
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize(); // Set initial state based on current window size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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


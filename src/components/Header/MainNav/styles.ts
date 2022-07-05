import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

export const MainNav = styled.nav`
  flex-direction: row;
  max-width: 100%;
  width: auto;
  display: flex;
`;

export const MainNavItem = motion.custom(styled(Link)`
  position: relative;
  width: max-content;
  margin-left: 1rem;
  margin-top: 1rem;
  &:first-child {
    margin-left: 0;
  }
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`);

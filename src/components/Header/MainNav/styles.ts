import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

interface StyledProps {
  open: boolean;
}

export const MainNav = styled.nav<StyledProps>`
  flex-direction: row;
  max-width: 100%;
  order: 9999;
  margin-top: auto;
  margin-bottom: 1rem;
  display: none;
  font-weight: 200;
  @media (min-width: 640px) {
    display: flex;
    flex-direction: row;
    width: auto;
    order: 0;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  ${({ open }) => open && `display: flex;`};
`;

export const MainNavItem = motion.custom(styled(Link)`
  position: relative;
  border-bottom-width: 1px;
  border-color: transparent;
  margin-left: 0px;
  margin-top: 0.75rem;
  color: rgba(49, 46, 129, 1);
  &:first-child {
    margin-left: 0;
  }

  @media (min-width: 640px) {
    margin-top: 0px;
    margin-left: 2rem;
  }

  width: max-content;

  &.active {
    border-color: rgba(79, 209, 197, 1);
  }

  &:before {
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0px;
    visibility: hidden;
    background-color: rgba(	79, 209, 197, 1);
    content: '';
    bottom: -1px;
    transform: scaleX(0);
    transition: 0.2s;
  }

  &:hover {
    color: rgba(49, 46, 129, 1);
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`);

export const ToogleMainNav = styled.button<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  width: 1.5rem;
  height: 1.25rem;
  @media (min-width: 640px) {
    display: none;
  }
  outline: none !important;

  span {
    display: inline-block;
    width: 1.5rem;
    height: 1px;
    background-color: rgba(99, 102, 241, 1);	
    transition: 0.2s;

    &:first-child {
      margin-bottom: ${({ open }) => (open ? `-1px` : `0.25rem`)};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
    }

    &:last-child {
      margin-top: ${({ open }) => (open ? `-1px` : `0.25rem`)};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'none')};
    }

    &:nth-child(2) {
      display: inline-block;
      width: 2rem;
      height: 1px;
      background-color: rgba(79, 209, 197, 1);
      opacity: ${({ open }) => (open ? `0` : `1`)};
      transform: ${({ open }) => (open ? 'translate(20px)' : 'none')};
    }
  }
`;

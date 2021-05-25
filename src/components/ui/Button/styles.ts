import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface StyledProps {
  primary?: boolean;
  block?: boolean;
}

export const Button = motion.custom(styled.button<StyledProps>`
  outline: none !important;
  border-width: 1px;
  border-radius: 9999px;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-color: rgba(129, 230, 217, 1);
  color: rgba(49, 46, 129, 1);	
  color: ${({ primary }) => (primary ? `rgba(129, 230, 217, 1)` : `rgba(79, 70, 229, 1)`)};
  ${({ block }) => block && `width: 100%;`};
`);

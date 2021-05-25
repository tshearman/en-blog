import styled from 'styled-components';

export interface StyledProps {
  center?: boolean;
}

export const InfoBlock = styled.div<StyledProps>`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  border-width: 1px;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 0.5rem;
  border-color: rgba(209, 213, 219, 1);
  ${({ center }) => center && `align-items: center;`};
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0.25rem rgba(33,33,33,.2); 
  }
`;

export const Icon = styled.span`
  border-width: 1px;
  display: flex;
  border-color: rgba(79, 209, 197, 1);
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
  justify-content: center;
  color: rgba(99, 102, 241, 1);
  border-radius: 9999px;
`;

export const Wrapper = styled.div<StyledProps>`
  ${({ center }) => center && `text-align: center;`};
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  line-height: 1.5rem;
`;

export const Content = styled.p`
  margin-top: 0.25rem;
`;

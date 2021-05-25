import styled from 'styled-components';

export interface StyledProps {
  section?: boolean;
}

export const Container = styled.div<StyledProps>`
  display: flex;
  flex-wrap: wrap;
  max-width: 768px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1.25rem;
  
  ${({ section }) => section && `padding-top: 2rem;`};
  ${({ section }) => section && `padding-bottom: 2rem;`};
  
  @media (min-width: 640px) {
    ${({ section }) => section && `padding-top: 4rem;`};
    ${({ section }) => section && `padding-bottom: 4rem;`};    
  }
`;

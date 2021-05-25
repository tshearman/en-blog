import styled from 'styled-components';

export const Footer = styled.footer`
  border-top-width: 0px;
  border-color: rgba(229, 231, 235, 1);
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    color: rgba(49, 46, 129, 1);
    &:hover {
      color: rgba(79, 70, 229, 1);
    }
  }
`;

export const Link = styled.a`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: rgba(49, 46, 129, 1);
  color: rgba(49, 46, 129, 1);
  &:hover {
    color: rgba(79, 70, 229, 1);
  }
`;

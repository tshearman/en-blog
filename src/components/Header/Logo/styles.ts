import styled from 'styled-components';
import { Link } from 'gatsby';

export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  text-align: left;
`;

export const SubTitle = styled.h2`
  font-size: 0.75rem;
  line-height: 1rem;
  width: 100%;
  margin-top: 0px;
  text-align: left;
  margin-bottom: 0px;
  color: rgba(79, 70, 229, 1);	
`;

export const Logo = styled(Link)`
  max-width: 80%;
  display: flex;
  align-items: center;
  margin-right: auto;
  color: rgba(49, 46, 129, 1);
`;

export const Text = styled.h1`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

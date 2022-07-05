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
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 200;
  text-align: left;
`;

export const SubTitle = styled.h2`
  font-size: 0.75rem;
  line-height: 1rem;
  margin-top: 0px;
  max-width: 100%;
  text-align: left;
  margin-bottom: 0px;
`;

export const Logo = styled(Link)`
  max-width: 75%;
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const Text = styled.h1`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

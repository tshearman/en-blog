import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as Styled from './styles';

const Logo: React.FC = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const meta = site.siteMetadata;

  return (
    <Styled.Logo to="/">
        <Styled.TitleSection>
          {meta.description && <Styled.SubTitle>{meta.description}</Styled.SubTitle>}
        <Styled.Title>{meta.title}</Styled.Title>
        </Styled.TitleSection>
    </Styled.Logo>
  );
};

export default Logo;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { renderToStaticMarkup } from "react-dom/server"

import Timeline from 'components/ui/Timeline';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import Publication from './Publication'

import { SectionTitle } from 'helpers/definitions';

interface PublicationData {
  node: {
    id: string;
    frontmatter: {
      authors: string[];
      title: string;
      journal: string;
      month?: string;
      year: string;
      link: string;
    };
  };
}

const Publications: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "publications section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "publication" } } }
        sort: { order: DESC, fields: frontmatter___year }
      ) {
        edges {
          node {
            id
            frontmatter {
              authors
              title
              journal
              year
              link
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const publications: PublicationData[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {publications.map((item) => {
        const {
          id,
          frontmatter: { authors, title, journal, month, year, link }
        } = item.node;

        const pub = <Publication authors={authors} title={title} journal={journal} year={year} link={link} />
        const staticElement = renderToStaticMarkup(pub)
        const date = (month ? (month + ' ') : '') + year
        return (
          <Timeline
            key={id}
            startDate={date}
            content={staticElement}
          />
        );
      })}
    </Container>
  );
};

export default Publications;

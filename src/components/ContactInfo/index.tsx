import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Contact {
  node: {
    id: string;
    frontmatter: {
      title: string;
      content?: string;
      icon: string;
      iconLibrary?: string;
      link: string;
      attachment?: {
        publicURL: string
      }
    };
  };
}

const ContactInfo: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contact section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "contact" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              content
              icon
              iconLibrary
              link
              attachment {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const contacts: Contact[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      {contacts.map((item) => {
        const {
          id,
          frontmatter: { title, content, icon, iconLibrary, link, attachment }
        } = item.node;
        const l = attachment?.publicURL || link
        return (
          <Styled.ContactInfoItem key={id}>
            <a href={l}>
              <InfoBlock icon={icon} iconLibrary={iconLibrary} title={title} content={content} center />
            </a>
          </Styled.ContactInfoItem>
        );
      })}
    </Container>
  );
};

export default ContactInfo;

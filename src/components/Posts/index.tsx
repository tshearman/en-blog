import React, { useState, MouseEvent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';

interface Post {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      cover?: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const Posts: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "blog section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" }, published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMM DD, YYYY")
              tags
            }
          }
        }
      }
    }
  `);

  function anyTags(post: Post, tags: string[]) {
    return tags.length > 0 && tags.some(t => post.node.frontmatter.tags.includes(t))
  }

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const posts: Post[] = allMarkdownRemark.edges;
  const allTags = posts
    .map(n => n.node.frontmatter.tags)
    .filter(ts => ts != null)
    .flatMap(ts => ts)
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort()
  const [selected, setSelected] = useState([...allTags]);
  const handleClick = (value: string) => () => {
    if (value === "all") {
      setSelected(selected.length === allTags.length ? [] : allTags)
    } else if (selected.includes(value)) {
      setSelected(selected.filter(s => s !== value))
    } else {
      setSelected([value, ...selected])
    }
  }

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Tags>
        {allTags.length > 1 && <Styled.Button key={"all"} clicked={selected.length == allTags.length} onClick={handleClick("all")}>{"all"}</Styled.Button>}
        {allTags.map(item => (<Styled.Button key={item} clicked={selected.includes(item)} onClick={handleClick(item)}>{item}</Styled.Button>))}
      </Styled.Tags>
      <Styled.Rule />
      <Styled.Posts>
        {posts
          .filter(p => anyTags(p, selected))
          .map((item) => {
            const {
              id,
              fields: { slug },
              frontmatter: { title, cover, description, date, tags }
            } = item.node;
            return (
              <Styled.Post key={id}>
                <Link to={slug}>
                  <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 1 }}>
                    <Styled.Card>
                      {cover &&
                        <Styled.Image>
                          <Img fluid={cover.childImageSharp.fluid} alt={title} />
                        </Styled.Image>
                      }
                      <Styled.Content>
                        <Styled.Date>{date}</Styled.Date>
                        <Styled.Title>{title}</Styled.Title>
                        <Styled.Description>{description}</Styled.Description>
                        <Styled.Tags>
                          {tags.map((item) => (
                            <Styled.Tag key={item}>{item}</Styled.Tag>
                          ))}
                        </Styled.Tags>
                      </Styled.Content>
                    </Styled.Card>
                  </motion.div>
                </Link>
              </Styled.Post>
            );
          })}
      </Styled.Posts>
    </Container>
  );
};

export default Posts;

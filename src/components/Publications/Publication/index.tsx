import React from 'react';
import * as Styled from './styles';
import { Content as StyledContent } from '../../ui/Timeline/styles'

interface Props {
    authors: string[];
    title: string;
    journal: string;
    year: string;
    link: string;
}

const Publication: React.FC<Props> = ({ authors, title, journal, year, link }) => {
  return(
    <a href={link}>
      <div>
        <Styled.Authors>{authors.join(', ')}</Styled.Authors>
        <span>{'. (' + year + ') '}</span>
        <Styled.Title>{'“' + title}</Styled.Title>
        <span>{'”. In: '}</span>
        <Styled.Journal>{journal}</Styled.Journal>
      </div>
    </a>
  )
};

export default Publication;

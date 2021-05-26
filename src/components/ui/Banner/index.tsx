import React from 'react';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

const Banner: React.FC<Props> = ({ title, subtitle, content }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} center />
      <FormatHtml content={content} />
    </Container>
  </Styled.Banner>
);

export default Banner;

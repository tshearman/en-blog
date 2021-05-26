import React from 'react';
import FormatHtml from 'components/utils/FormatHtml';

import * as Styled from './styles';

interface Props {
  title?: string;
  subtitle?: string;
  content?: React.ReactNode;
  startDate: string;
  endDate?: string;
}

const Timeline: React.FC<Props> = ({ title, subtitle, content, startDate, endDate }) => (
  <Styled.Timeline>
    <Styled.Point />
    <Styled.Details>
      <Styled.Date>
        {startDate} { endDate && `- ${endDate}`}
      </Styled.Date>
      {title && <Styled.Title>{title}</Styled.Title>}
      {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
    </Styled.Details>
    {content && <Styled.Content><FormatHtml content={content} /></Styled.Content>}
  </Styled.Timeline>
);

export default Timeline;

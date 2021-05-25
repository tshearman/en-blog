import React from 'react';

interface Props {
  content: any;
  className?: string;
}

const FormatHtml: React.FC<Props> = ({ content, className="format-html" }) => (
  <div style={{maxWidth: '100%'}}
    className={className}
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

export default FormatHtml;

import React from 'react';

import Icon from 'components/ui/Icon';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  title: string;
  content?: React.ReactNode;
  icon: string;
  iconLibrary?: string; 
}

const InfoBlock: React.FC<Props> = ({ icon, iconLibrary, title, content, center }) => (
  <Styled.InfoBlock center={center}>
    <Styled.Icon>
      <Icon name={icon} library={iconLibrary ? iconLibrary : "fas"}/>
    </Styled.Icon>
    <Styled.Wrapper center={center}>
      <Styled.Title>{title}</Styled.Title>
      {content && <Styled.Content>{content}</Styled.Content>}
    </Styled.Wrapper>
  </Styled.InfoBlock>
);

export default InfoBlock;

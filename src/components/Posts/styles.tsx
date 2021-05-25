import styled from 'styled-components';

export interface StyledProps {
  center?: boolean;
}

export interface ClickedProps {
  key: string;
  clicked: boolean;
}

export const Posts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Post = styled.div`
  width: 100%;
  padding: 0.75rem;
  @media (min-width: 640px) { 
    width: 100%
  };
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 1rem;
  color: rgba(49, 46, 129, 1);
`;

export const Image = styled.figure`
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const Description = styled.p``;

export const Date = styled.h2`
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 0px;
  color: rgba(99, 102, 241, 1);
`;

export const Tags = styled.div<StyledProps>`
  padding: 1rem;
  padding-top: 0.5rem;
  ${({ center }) => center && `align-items: center;`};
`;

export const Tag = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(	79, 209, 197, 1);
  margin: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 9999px;
  display: inline-block;
`;

export const Button = styled.button<ClickedProps>`
  font-size: 0.75rem;
  line-height: 1rem;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(	79, 209, 197, 1);
  margin: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 9999px;
  display: inline-block;
  opacity: ${({ clicked }) => clicked ? `1` : `0.5`};
  filter: grayscale(${({ clicked }) => clicked ? `0` : `1`});
`

export const Rule = styled.hr`
  width: 100%;
  height: 2px;
  color: red;
  margin: 0;
  margin-bottom: 1rem;
`

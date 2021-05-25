import styled from 'styled-components';

export interface StyledProps {
  center?: boolean;
}

export const TitleSection = styled.div`
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1<StyledProps>`
  margin-top: 0;
  margin-bottom: 1rem;
  width: 100%;
  text-align: ${({ center }) => center ? "center" : "left"};
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;

export const SubTitle = styled.h2<StyledProps>`
  margin-bottom: 0rem;
  width: 100%;
  text-align: left;
  text-align: ${({ center }) => center ? "center" : "left"};
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgba(79, 70, 229, 1);
`;

export const Separator = styled.h2<StyledProps>`
  margin-top: -0.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  width: 0.5rem;
  height: 2rem;
  ${({ center }) => center && `
    margin-left: auto;
    margin-right: auto;
  `};

  &:before {
    content: '';
    width: 1px;
    position: absolute;
    left: 0px;
    height: 100%;
    background-color: rgba(99, 102, 241, 1);
  }

  &:after {
    content: '';
    background-color: #4fd1c5;
    height: 1.5rem;
    position: absolute;
    width: 1px;
    margin-left: 0.25rem;
  }
`;

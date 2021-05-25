import styled from 'styled-components';

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 640px) {
    flex-direction: row;
  }
  width: 100%;
  padding: 1rem;
  position: relative;
  border: 0px;
  border-left-width: 1px;	
  border-color: rgba(199, 210, 254, 1);
  border-style: solid;
  &:last-child {
    padding-bottom: 0px;
  }
`;

export const Details = styled.div`
  width: 100%;
  @media (min-width: 640px) { 
    width: 33.333333%;
   };
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 1rem;
  @media (min-width: 640px) { 
    width: 66.666667%;
    margin-top: 0rem;
   };
`;

export const Title = styled.div`
  font-weight: 600;
  margin-top: 0.75rem;
`;

export const Subtitle = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
`;

export const Date = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  border-width: 1px;
  border-color: rgba(79, 209, 197, 1);
  border-style: solid;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 9999px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: fit-content;
`;

export const Point = styled.span`
  position: absolute;
  border-width: 1px;
  width: 0.75rem;
  height: 0.75rem;
  border-style: solid;
  border-color: rgba(204, 215, 255, 1);
  background-color: rgba(224, 231, 255, 1);
  border-radius: 9999px;
  left: -7px;
  top: 18px;
`;

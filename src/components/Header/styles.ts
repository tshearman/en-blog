import styled from 'styled-components';
import { Container } from 'components/ui/Container/styles';

export const Header = styled.header`
  font-family: "Computer Modern", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
  background-color: rgba(243, 244, 246, 1);	
  border-bottom-width: 1px;
  border-color: rgba(229, 231, 235, 1);	
  margin-bottom: -1px;
`;

export const Wrapper = styled(Container)`
  align-items: center;
`;

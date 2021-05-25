import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0px;
    color: rgba(49, 46, 129, 1);
    background-color: rgba(255, 255, 255, 1);
  }

  a {
    color: rgba(79, 70, 229, 1);
  }

  a:hover {
    color: rgba(67, 56, 202, 1);
  }

  p + p {
    margin-top: 0.75rem;
  }
`;

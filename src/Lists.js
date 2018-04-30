import styled from 'styled-components';

export const OrderedList = styled.ol`
  list-style: decimal inside;
  padding-left: 0;
  margin-top: 0;

  ul, ol {
    margin: 1.5rem 0 1.5rem 3rem;
    font-size: 90%;
  }
`;

export const UnOrderedList = styled.ul`
  list-style: circle inside;
  padding-left: 0;
  margin-top: 0;

  ol, ul {
    margin: 1.5rem 0 1.5rem 3rem;
    font-size: 90%;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 1rem;
`;
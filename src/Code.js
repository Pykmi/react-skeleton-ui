import styled from 'styled-components';

export const Code = styled.pre`
  padding: .2rem .5rem;
  margin: 3.0rem .2rem;
  border: 1px solid #E1E1E1;
  border-radius: 4px;

  & > code {
    display: block;
    padding: 1rem 1.5rem;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
`;
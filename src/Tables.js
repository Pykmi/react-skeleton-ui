import styled from 'styled-components';

const Table = styled.table`
  width: ${props => props.fullwidth ? '100%' : ''};
  box-sizing: ${props => props.fullwidth ? 'border-box' : ''};
  border-spacing: 0;
  border-collapse: collapse;
  margin-bottom: 2.5rem;
`;

const Th = styled.th`
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #E1E1E1;

  :first-child {
    padding-left: 0;
  }
  :last-child {
    padding-right: 0;
  }
`;

const Td = styled.td`
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #E1E1E1;

  :first-child {
    padding-left: 0;
  }
  :last-child {
    padding-right: 0;
  }
`;

export { Table, Th, Td };

import styled from 'styled-components';

/**
 * Table component
 * 
 * Props
 * 
 * full    = make table use full width of its parent element
 * striped = make a striped table
 */
const Table = styled.table`
  width: ${props => props.full ? '100%' : ''};
  box-sizing: ${props => props.full ? 'border-box' : ''};
  border-spacing: 0;
  border-collapse: collapse;
  border: ${props => props.borders ? '1px solid #E1E1E1' : ''};
  margin-bottom: 2.5rem;

  /* stripes to table rows */
  tr:nth-child(even) {
    background-color: ${props => props.striped ? '#f8f8f8' : ''}
  }

  /* styles to table header and data cells */
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #E1E1E1;

    :first-child {
      padding-left: ${props => props.borders ? '15px' : 0};
    }
    :last-child {
      padding-right: ${props => props.borders ? '15px' : 0};
    }
  }
`;

/**
 * Table header component
 * 
 * Depracated, will be removed
 * */
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

/**
 * Table data component
 * 
 * Depracated, will be removed
 * */
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

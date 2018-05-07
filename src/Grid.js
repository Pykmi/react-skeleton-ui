import styled from 'styled-components';

/* Column widths */
const ColumnWidth = {
  1: '4.66666666667%',
  2: '13.3333333333%',
  3: '22%',
  4: '30.6666666667%',
  5: '39.3333333333%',
  6: '48%',
  7: '56.6666666667%',
  8: '65.3333333333%',
  9: '74.0%',
  10: '82.6666666667%',
  11: '91.3333333333%',
  12: '100%'
};

/* Column offset width */
const ColumnOffset = {
  1: 8.66666666667,
  2: 17.3333333333,
  3: 26,
  4: 34.6666666667,
  5: 43.3333333333,
  6: 52,
  7: 60.6666666667,
  8: 69.3333333333,
  9: 78.0,
  10: 86.6666666667,
  11: 95.3333333333
}

/* Size of the column gutter */
const GutterWidth = 4;

/* Helper to calculate true offset */
const CalcOffset = (offset, first) => {
  const total = ColumnOffset[offset] + (first ? 0 : GutterWidth) + '%'
  return total;
}

export const Grid = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (min-width: 650px) {
    width: 85%;
    padding: 0;
  }

  :after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Column = styled.div`
  margin-top: 1.0rem;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 640px) {
    margin-left: ${props => props.offset ? CalcOffset(props.offset) : GutterWidth + '%' };
    margin-top: 0;
    float: left;
    width: ${props => ColumnWidth[props.cols]};
    :first-child {
      margin-left: ${props => props.offset ? CalcOffset(props.offset, true) : 0 };
    }
  }
`;

export const Row = styled.div`
  :after {
    content: "";
    display: table;
    clear: both;
  }

  @media (min-width: 640px) {
    margin-top: 1.0rem;
  }
`;
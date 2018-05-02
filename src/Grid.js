import styled from 'styled-components';

const Grid = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (min-width: 550px) {
    width: 85%;
    padding: 0;
  }

  :after {
    content: "";
    display: table;
    clear: both;
  }
`;

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
  12: '100%',
  OneThird: '30.6666666667%',
  TwoThirds: '65.3333333333',
  OneHalf: '48%'
};

export const Column = styled.div`
  margin-top: 1.0rem;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 550px) {
    margin-left: 4%;
    margin-top: 0;
    float: left;
    width: ${props => ColumnWidth[props.cols]};
    :first-child {
      margin-left: 0;
    }
  }
`;

const Row = styled.div`
  :after {
    content: "";
    display: table;
    clear: both;
  }

  @media (min-width: 550px) {
    margin-top: 1.0rem;
  }
`;

const OneColumn = Column.extend` width: 4.66666666667%; `;
const TwoColumns = Column.extend` width: 13.3333333333%; `;
const ThreeColumns = Column.extend` width: 22%; `;
const FourColumns = Column.extend` width: 30.6666666667%; `;
const FiveColumns = Column.extend` width: 39.3333333333%; `;
const SixColumns = Column.extend` width: 48%; `;
const SevenColumns = Column.extend` width: 56.6666666667%; `;
const EightColumns = Column.extend` width: 65.3333333333%; `;
const NineColumns = Column.extend` width: 74.0%; `;
const TenColumns = Column.extend` width: 82.6666666667%; `;
const ElevenColumns = Column.extend` width: 91.3333333333%; `;
const TwelveColumns = Column.extend` width: 100%; margin-left: 0; `;

const OneThirdColumn = Column.extend` width: 30.6666666667%; `;
const TwoThirdsColumn = Column.extend` width: 65.3333333333%; `;
const OneHalfColumn = Column.extend` width: 48%; `;

export {
  Grid, Row, OneColumn, TwoColumns, ThreeColumns, FourColumns, FiveColumns, SixColumns, 
  SevenColumns,EightColumns, NineColumns, TenColumns, ElevenColumns, TwelveColumns
}
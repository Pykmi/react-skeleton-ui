import styled from 'styled-components';

const Grid = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (min-width: 400px) {
    width: 85%;
    padding: 0;
  }

  @media (min-width: 550px) {
    width: 80%;
  }

  :after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Column = styled.div`
  width: 100%;
  float: left;
  box-sizing: border-box;

  @media (min-width: 550px) {
    margin-left: 4%;
    :first-child {
      margin-left: 0;
    }
  }
`;

const Row = styled.div`
  margin-top: 1.0rem; 
  :after {
    content: "";
    display: table;
    clear: both;
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
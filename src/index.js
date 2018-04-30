import { React } from 'react';
import { injectGlobal } from 'styled-components';

import { Grid, Row, OneColumn, TwoColumns, ThreeColumns, FourColumns, FiveColumns, SixColumns, 
         SevenColumns,EightColumns, NineColumns, TenColumns, ElevenColumns, TwelveColumns
       } from './Grid';
import { Form, TextInput, TextInputArea, RadioBox, CheckBox, Label, Fieldset, Select, Legend } from './Forms';
import { Anchor, H1, H2, H3, H4, H5, H6, Strong } from './Typography';
import { Ruler } from './Ruler';
import { ListItem, OrderedList, UnOrderedList } from './Lists';
import { Table, Th, Td } from './Tables';
import { Button, Submit } from './Buttons';
import { Code, HtmlTag, SmallText, Tag } from './Helpers';

injectGlobal`
  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.4em; /* currently ems cause chrome bug misinterpreting rems on body element */
    line-height: 1.6;
    font-weight: 400;
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #222;
  }

  p {
    margin-top: 0;
  }

  @font-face {
    font-family: "Raleway";
    src: url('https://fonts.googleapis.com/css?family=Raleway');
  }
`;

export {
  /* Grid components */
  Grid, Row, OneColumn, TwoColumns, ThreeColumns, FourColumns, FiveColumns, SixColumns, 
  SevenColumns,EightColumns, NineColumns, TenColumns, ElevenColumns, TwelveColumns,
  
  /* Form components */
  Form, TextInput, TextInputArea, RadioBox, CheckBox, Label, Fieldset, Select, Legend,

  /* Typography components */
  Anchor, H1, H2, H3, H4, H5, H6, Strong,

  /* Ruler component */
  Ruler,

  /* List components */
  ListItem, OrderedList, UnOrderedList,

  /* Table components */
  Table, Th, Td,

  /* Button components */
  Button, Submit,

  /* Helper components */
  Code, HtmlTag, SmallText, Tag
};
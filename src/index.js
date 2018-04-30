import { React } from 'react';
import { injectGlobal } from 'styled-components';

import { Grid, Row, OneColumn, TwoColumns, ThreeColumns, FourColumns, FiveColumns, SixColumns, 
         SevenColumns,EightColumns, NineColumns, TenColumns, ElevenColumns, TwelveColumns
       } from './Grid';

import { Form, TextInput, TextInputArea, RadioBox, CheckBox, Label, Fieldset, Select, Legend } from './Forms';

import { Ruler } from './Ruler';
import { H1, H2, H3, H4, H5, H6 } from './Headers';
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

  strong {
    font-weight: 600;
  }

  a {
    color: #1EAEDB;
    text-decoration: none;
  }
  
  a:hover {
    color: #0FA0CE;
    text-decoration: none;
  }

  @font-face {
    font-family: "Raleway";
    src: url('https://fonts.googleapis.com/css?family=Raleway');
  }
`;

export {
  Grid, Row, OneColumn, TwoColumns, ThreeColumns, FourColumns, FiveColumns, SixColumns, 
  SevenColumns,EightColumns, NineColumns, TenColumns, ElevenColumns, TwelveColumns,
  Form, TextInput, TextInputArea, RadioBox, CheckBox, Label, Fieldset, Select, Legend,
  H1, H2, H3, H4, H5, H6,
  Code, HtmlTag, SmallText, Tag,
  Ruler,
  ListItem, OrderedList, UnOrderedList,
  Table, Th, Td,
  Button, Submit
};
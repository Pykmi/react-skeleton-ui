import * as font from './theme/typography';
import * as color from './theme/colors';
import * as button from './theme/buttons';

export const theme = {
  color: {
    primary: contrast => contrast ? color.blue : color.light_blue,
    error: contrast => contrast ? color.dark_red : color.light_red,
    success: contrast => contrast ? color.dark_green : color.light_green,
    warning: contrast => contrast ? color.dark_yellow : color.light_yellow,
    none: color.nocolor,
    palette: {
      light_blue: color.light_blue,
      blue: color.blue,
      dark_blue: color.dark_blue,
      white: color.white,
      black: color.black,
      grey: color.grey,
      dark_grey: color.dark_grey,
      deep_grey: color.deep_grey,
      light_red: color.light_red,
      dark_red: color.dark_red,
      light_green: color.light_green,
      dark_green: color.dark_green,
      light_yellow: color.light_yellow,
      dark_yellow: color.dark_yellow
    }
  },
  font: {
    face: font.face,
    weight: font.weight,
    height: font.height,
    space: font.space
  },
  corner: {
    normal: '4px'
  },
  button: {
    display: button.display,
    padding: button.padding,
    margin: button.margin,
    align: button.align,
    decoration: button.decoration,
    whitespace: button.whitespace,
    border: button.border,
    cursor: button.cursor,
    boxsize: button.boxsize,
    outline: button.outline
  }
};
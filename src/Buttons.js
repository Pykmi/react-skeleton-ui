import styled from 'styled-components';
import { theme } from './Theme';

/* Main Button component */
/**
 * Props
 * 
 * primary  = give the button a primary color, otherwise transparent
 * upper    = capitalize the button text
 * nomargin = remove margins
 */
export const Button = styled.button`
  display: ${props => props.theme.button.display};
  height: ${props => props.theme.font.height.ultra};
  padding: ${props => props.theme.button.padding};
  color: ${props => props.primary ? props.theme.color.palette.white : props.theme.color.palette.deep_grey};
  text-align: ${props => props.theme.button.align};
  font-size: 11px;
  font-weight: ${props => props.theme.font.weight.heavy};
  line-height: ${props => props.theme.font.height.ultra};
  letter-spacing: ${props => props.theme.font.space.micro};
  text-transform: ${props => props.upper ? 'uppercase' : ''};
  text-decoration: ${props => props.theme.button.decoration};
  white-space: ${props => props.theme.button.whitespace};
  background-color: ${props => props.primary ? props.theme.color.primary() : props.theme.color.none};
  border-radius: ${props => props.theme.corner.normal};
  border: ${props => props.theme.button.border} ${props => props.primary ? props.theme.color.primary() : props.theme.color.palette.deep_grey};
  cursor: ${props => props.theme.button.cursor};
  box-sizing: ${props => props.theme.button.boxsize};
  margin: ${props => props.nomargins ? '0' : props.theme.button.margin };

  :hover, :focus {
    color: ${props => props.primary ? props.theme.color.palette.white : props.theme.color.palette.black};
    border-color: ${props => props.primary ? props.theme.color.primary(true) : props.theme.color.palette.dark_grey};
    background-color: ${props => props.primary ? props.theme.color.primary(true) : ''};
    outline: ${props => props.theme.button.outline};
  }
`;

Button.defaultProps = {
  theme
}

/* Submit button component */
export const Submit = Button.withComponent('input');

/* Link button component */
export const LinkButton = Button.withComponent('a');
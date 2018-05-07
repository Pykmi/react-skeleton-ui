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
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: ${props => props.primary ? props.theme.color.palette.white : props.theme.color.palette.deep_grey};
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: .1rem;
  text-transform: ${props => props.upper ? 'uppercase' : ''};
  text-decoration: none;
  white-space: nowrap;
  background-color: ${props => props.primary ? props.theme.color.primary() : props.theme.color.none};
  border-radius: 4px;
  border: 1px solid ${props => props.primary ? props.theme.color.primary() : props.theme.color.palette.deep_grey};
  cursor: pointer;
  box-sizing: border-box;
  margin: ${props => props.nomargins ? '0' : '0 .3rem .3rem .3rem' };

  :hover, :focus {
    color: ${props => props.primary ? props.theme.color.palette.white : props.theme.color.palette.black};
    border-color: ${props => props.primary ? props.theme.color.primary(true) : props.theme.color.palette.dark_grey};
    background-color: ${props => props.primary ? props.theme.color.primary(true) : ''};
    outline: 0;
  }
`;

Button.defaultProps = {
  theme
}

/* Submit button component */
export const Submit = Button.withComponent('input');

/* Link button component */
export const LinkButton = Button.withComponent('a');
import styled from 'styled-components';
import { theme } from './Theme';

/* Header components, from H1 through H6 */
const H1 = styled.h1`
  line-height: ${props => props.theme.font.height.h1};
  letter-spacing: ${props => props.theme.font.space.micro};
  text-transform: ${props => props.upper ? 'uppercase' : ''};
  margin-bottom: 2.0rem;
  margin-top: 0;
  font-weight: ${props => props.theme.font.weight.light};
  font-size: ${props => props.font.size.H1.h1.mobile};

  @media (min-width: ${props => props.theme.screen.mobile}) {
    font-size: ${props => props.font.size.H1.h1.desktop};
  }
`;

export const H2 = H1.extend`
  font-size: ${props => props.font.size.H1.h2.mobile};
  line-height: ${props => props.theme.font.height.h2};
  letter-spacing: ${props => props.theme.font.space.micro};
  
  @media (min-width: ${props => props.theme.screen.mobile}) {
    font-size: ${props => props.font.size.H1.h2.desktop};
  }
`;

export const H3 = H1.extend`
  font-size: ${props => props.font.size.H1.h3.mobile};
  line-height: ${props => props.theme.font.height.h3};
  letter-spacing: ${props => props.theme.font.space.micro};

  @media (min-width: ${props => props.theme.screen.mobile}) {
    font-size: ${props => props.font.size.H1.h3.desktop};
  } 
`;

export const H4 = H1.extend`
  font-size: ${props => props.font.size.H1.h4.mobile};
  line-height: ${props => props.theme.font.height.h4}; 
  letter-spacing: ${props => props.theme.font.space.micro};

  @media (min-width: ${props => props.theme.screen.mobile}) {
    font-size: ${props => props.font.size.H1.h4.desktop}; 
  }
`;

export const H5 = H1.extend`
  font-size: ${props => props.font.size.H1.h5.mobile};
  line-height: ${props => props.theme.font.height.h5};
  letter-spacing: ${props => props.theme.font.space.micro};

  @media (min-width: ${props => props.theme.screen.mobile}) {
    font-size: ${props => props.font.size.H1.h5.desktop};
  }
`;

export const H6 = H1.extend`
  font-size: ${props => props.font.size.H1.h6.mobile};
  line-height: ${props => props.theme.font.height.normal}; 
  letter-spacing: ${props => props.theme.font.space.normal};

  @media (min-width: ${props => props.theme.screen.mobile}) {
    font-size: ${props => props.font.size.H1.h6.desktop}; 
  }
`;


/* Bold text component */
export const Strong = styled.strong`
  font-weight: ${props => props.theme.font.weight.heavy};
`;

/* Anchor component for links outside of react router */
export const Anchor = styled.a`
  color: ${props => props.theme.color.primary()};
  text-decoration: none;

  :hover {
    color: ${props => props.theme.color.palette.dark_blue};
    text-decoration: none;
  }
`;

H1.defaultProps = {
  theme
}

Strong.defaultProps = {
  theme
}

Anchor.defaultProps = {
  theme
}
import styled from 'styled-components';
import { theme } from './Theme';

const BaseHeading = styled.h1`
  font-size: 4.0rem; line-height: ${props => props.theme.font.height.h1}; letter-spacing: ${props => props.theme.font.space.micro};
  text-transform: ${props => props.upper ? 'uppercase' : ''};
  margin: 2.0rem 0 1.0rem 0;
`;

BaseHeading.defaultProps = {
  theme
}

/* Header components, from H1 through H6 */
export const H1 = BaseHeading.extend`
  @media (min-width: 550px) { font-size: 5.0rem; } /* Larger than phablet */
`;

export const H2 = BaseHeading.extend`
  font-size: 3.6rem; line-height: ${props => props.theme.font.height.h2}; letter-spacing: ${props => props.theme.font.space.micro};
  @media (min-width: 550px) { font-size: 4.2rem; } /* Larger than phablet */
`;

export const H3 = BaseHeading.extend`
  font-size: 3.0rem; line-height: ${props => props.theme.font.height.h3}; letter-spacing: ${props => props.theme.font.space.micro};
  @media (min-width: 550px) { font-size: 3.6rem; } /* Larger than phablet */
`;

export const H4 = BaseHeading.extend`
  font-size: 2.4rem; line-height: ${props => props.theme.font.height.h4};  letter-spacing: ${props => props.theme.font.space.micro};
  @media (min-width: 550px) { font-size: 3.0rem; } /* Larger than phablet */
`;

export const H5 = BaseHeading.extend`
  font-size: 1.8rem; line-height: ${props => props.theme.font.height.h5}; letter-spacing: ${props => props.theme.font.space.micro};
  @media (min-width: 550px) { font-size: 2.4rem; } /* Larger than phablet */
`;

export const H6 = BaseHeading.extend`
  font-size: 1.5rem; line-height: ${props => props.theme.font.height.normal};  letter-spacing: ${props => props.theme.font.space.normal};
  @media (min-width: 550px) { font-size: 1.5rem; } /* Larger than phablet */
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

Anchor.defaultProps = {
  theme
}
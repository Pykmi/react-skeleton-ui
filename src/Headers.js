import styled from 'styled-components';

const BaseHeading = styled.h1`
  font-size: 4.0rem; line-height: 1.2; letter-spacing: -.1rem;
  text-transform: ${props => props.big ? 'uppercase' : ''};
  margin: 2.0rem 0 1.0rem 0;
`;

const H1 = BaseHeading.extend`
  @media (min-width: 550px) { font-size: 5.0rem; } /* Larger than phablet */
`;

const H2 = BaseHeading.extend`
  font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem;
  @media (min-width: 550px) { font-size: 4.2rem; } /* Larger than phablet */
`;

const H3 = BaseHeading.extend`
  font-size: 3.0rem; line-height: 1.3; letter-spacing: -.1rem;
  @media (min-width: 550px) { font-size: 3.6rem; } /* Larger than phablet */
`;

const H4 = BaseHeading.extend`
  font-size: 2.4rem; line-height: 1.35;  letter-spacing: -.08rem;
  @media (min-width: 550px) { font-size: 3.0rem; } /* Larger than phablet */
`;

const H5 = BaseHeading.extend`
  font-size: 1.8rem; line-height: 1.5; letter-spacing: -.05rem;
  @media (min-width: 550px) { font-size: 2.4rem; } /* Larger than phablet */
`;

const H6 = BaseHeading.extend`
  font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0rem;
  @media (min-width: 550px) { font-size: 1.5rem; } /* Larger than phablet */
`;

export {
  H1, H2, H3, H4, H5, H6
}
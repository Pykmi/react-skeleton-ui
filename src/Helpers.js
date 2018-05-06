import React from 'react';
import styled from 'styled-components';

export const SmallText = styled.span`
  padding-left: 2.0rem;
  font-size: 1.4rem;
  font-weight: 300;
`;

export const Tag = styled.span`
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  border-radius: 3px;
  background-color: #efefef;
  border: 1px solid #ddd;
`;

export const HtmlTag = (props) => {
  const content = "<"+props.children+">";
  return <Tag>{content}</Tag>;
};
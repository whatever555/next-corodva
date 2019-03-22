import React, { SFC } from "react";
import styled from "styled-components";

const Icon = ({ iconName }) => (
  <SVGHolder>
    <StyledIcon title={iconName} className={"icon " + iconName.toLowerCase()}>
      <use xlinkHref={"#" + iconName.toLowerCase()} />
    </StyledIcon>
  </SVGHolder>
);

const SVGHolder = styled.div`
  position: relative;
  animation: fadeIn 0.4s;
  animation-fill-mode: forwards;
  border: 0;
  height: 100%;
  outline: 0;
  display: inline-block;
`;
const StyledIcon = styled.svg`
  width: auto;
  border: 0;
  outline: 0;
  max-width: 100%;
  padding: 0;
  margin: 0 auto;
  height: 100%;
  > use {
    margin: 0 auto;
  }
`;

export default Icon;

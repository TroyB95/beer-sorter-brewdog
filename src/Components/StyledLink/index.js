import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  height: 8vh;

  display: flex;
  align-items: center;

  font-size: 2.25em;

  text-decoration: none;
  color: black;

  /* &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    } */
`;

export default props => <StyledLink {...props} />;

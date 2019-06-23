import React from "react";

import StyledLink from "../StyledLink";

import { StyledBeerDetailsContainer } from "./styles";

function BeerMoreDetails(props) {
  return (
    <StyledBeerDetailsContainer>
      <StyledLink to="/">&#60; back</StyledLink>
      <h4>{props.beerName}</h4>
      <img src={props.img} alt={`can of ${props.beerName}`} />
      <h5>ABV: {props.abv}</h5>
      <p>
        <em>{props.tagline}</em>
      </p>
      <p>{props.description}</p>
    </StyledBeerDetailsContainer>
  );
}

export default BeerMoreDetails;

import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { StyledBeerContainer } from "./styles";

function BeerDisplay(props) {
  return (
    <StyledBeerContainer>
      <h4>{props.beerName}</h4>
      <h5>ABV: {props.abv}</h5>
      <img src={props.img} alt={`${props.beerName} beer`} />
      <Link to={`/${props.id}`}>More Details</Link>
    </StyledBeerContainer>
  );
}

export default BeerDisplay;

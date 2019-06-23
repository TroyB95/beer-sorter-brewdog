import React from "react";

import BeerDisplay from "../../Components/BeerDisplay";
import { StyledHome, StyledBeerDisplayArea, StyledTitle } from "./styles";

function Home(props) {
  // ToDo Create loading component
  if (props.beerData.length === 0) return <div> Loading </div>;

  return (
    <StyledHome>
      <StyledTitle>Punk Beers</StyledTitle>
      <StyledBeerDisplayArea>
        {props.beerData.map(beer => (
          <BeerDisplay key={beer.id} id={beer.id} beerName={beer.name} abv={beer.abv} img={beer.image_url} />
        ))}
      </StyledBeerDisplayArea>
    </StyledHome>
  );
}

export default Home;

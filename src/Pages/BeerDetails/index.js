import React from "react";

import BeerMoreDetails from "../../Components/BeerMoreDetails";

function BeerDetails(props) {
  if (props.beerData.length === 0) {
    return <div> Loading </div>;
  } else {
    return (
      <BeerMoreDetails
        abv={props.beerData[props.match.params.id - 1].abv}
        img={props.beerData[props.match.params.id - 1].image_url}
        beerName={
          props.match.params.id ? props.beerData[props.match.params.id - 1].name : props.beerData.name
        }
        description={props.beerData[props.match.params.id - 1].description}
        tagline={props.beerData[props.match.params.id - 1].tagline}
      />
    );
  }
}

export default BeerDetails;

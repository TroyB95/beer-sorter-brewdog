import styled from "styled-components";

export const StyledBeerContainer = styled.div`
  width: 23%;
  height: 60vh;

  display: grid;
  grid-template-rows: 10% 10% 60% 5% 5%;

  margin-bottom: 20px;

  text-align: left;

  @media screen and (max-width: 768px) {
    width: 65%;
  }

  h4 {
    font-size: 2em;

    grid-row: 1 / span 1;

    margin: 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  h5 {
    font-size: 1.5em;

    grid-row: 2 / span 1;

    margin: 0;
  }

  img {
    grid-row: 3 / span 1;

    margin: 0;

    width: 50%;
    height: 80%;

    align-self: center;
    justify-self: center;

    @media screen and (max-width: 768px) {
      align-self: center;
      justify-self: flex-start;

      width: 100%;
      height: 100%;
    }
  }

  a {
    grid-row: 5 / span 1;

    margin: 0;

    font-size: 1.5em;
  }
`;

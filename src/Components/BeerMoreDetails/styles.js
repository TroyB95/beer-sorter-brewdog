import styled from "styled-components";

export const StyledBeerDetailsContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin-bottom: 20px;
  margin-left: 20px;

  text-align: left;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding-left: 5%;
  }

  h4 {
    font-size: 3em;

    height: 10vh;

    margin: 0;
  }

  h5 {
    font-size: 2em;
    font-weight: 500;

    margin: 1em 0;
  }

  img {
    margin: 0;

    width: 50%;
    height: 50vh;

    @media screen and (max-width: 768px) {
      width: 50%;
      height: 50vh;
    }

    @media screen and (max-width: 440px) {
      width: 65%;
      height: 300px;
    }
  }

  p {
    font-size: 2em;
    margin: 0;

    margin-bottom: 1em;

    padding-right: 2em;
  }
`;

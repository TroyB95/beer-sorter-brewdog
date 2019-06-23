import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-left: 3%;
`;

export const StyledBeerDisplayArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 90%;
`;

export const StyledTitle = styled.h1`
  text-transform: uppercase;

  width: 100%;
  height: 8vh;

  text-align: left;

  padding-top: 3%;
  margin-top: 0;

  font-size: 3em;
`;

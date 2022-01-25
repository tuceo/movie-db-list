import styled from "styled-components";
import {Card} from "react-bootstrap";

export const MovieCard = styled(Card)`
  margin-top: 20px;
  flex-direction: row;
  box-shadow: 5px 10px 18px #888888;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const MoviePoster = styled(Card.Img)`
  width: 300px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;


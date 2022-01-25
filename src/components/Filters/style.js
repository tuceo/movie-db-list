import styled from "styled-components";
import {FloatingLabel} from "react-bootstrap";

export const FiltersTitle = styled.h4`
  text-align: left;
`;

export const FiltersWrapper = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
  box-shadow: 5px 10px 18px #888888;
  margin-right: 50px;
  width: 400px;
  border-radius:10px;
  height: fit-content;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Label = styled(FloatingLabel)`
  margin-bottom: 20px;
`;

import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  margin: 50px 100px;

  ${({type}) =>
          type === "flex" &&
          css`
            display: flex;
          `};

  @media screen and (max-width: 700px) {
    display: block;
    margin: 20px 50px;
  }
`;

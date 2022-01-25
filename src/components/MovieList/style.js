import styled, {css} from "styled-components";
import {Pagination, Table} from "react-bootstrap";

export const MovieListWrapper = styled.div`
    width: 70%;
  @media screen and (max-width: 700px) {
    margin-top: 20px;
    width: 100%;
  }
`;

export const MovieTable = styled(Table)`
  background-color:white;
  box-shadow: 5px 10px 18px #888888;
  border-radius:10px;
`;

export const HeaderItem = styled.th`
  padding: 10px !important;
`;

export const RowItem = styled.td`
  padding: 10px !important;
  ${({ clickable }) =>
          clickable &&
          css`
            cursor: pointer;
		`}
`;

export const TotalPage = styled.div`

`;

export const PaginationWrapper = styled(Pagination)`
  justify-content: center;
`;

import {Pagination} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {HeaderItem, MovieListWrapper, MovieTable, PaginationWrapper, RowItem, TotalPage} from "./style";

const MovieList = ({movies, totalPage, filters, setFilters}) => {
    const navigate = useNavigate();

    return (
        <MovieListWrapper>
            <MovieTable striped hover size="sm">
                <thead>
                <tr>
                    <HeaderItem>Title</HeaderItem>
                    <HeaderItem>Year</HeaderItem>
                    <HeaderItem>imdbID</HeaderItem>
                </tr>
                </thead>

                <tbody>
                {movies?.map(item => (
                    <tr key={item?.imdbID}>
                        <RowItem onClick={() => navigate("/detail?imdbID=" + item?.imdbID)}
                                 clickable>{item?.Title}</RowItem>
                        <RowItem>{item?.Year}</RowItem>
                        <RowItem>{item?.imdbID}</RowItem>
                    </tr>
                ))}
                </tbody>
            </MovieTable>

            <TotalPage>Total Page: {totalPage}</TotalPage>

            <PaginationWrapper>
                <Pagination.First onClick={() => setFilters({...filters, page: 1})}/>
                <Pagination.Prev onClick={() => setFilters({...filters, page: filters?.page - 1})}/>
                <Pagination.Item active={true}> {filters?.page}</Pagination.Item>
                <Pagination.Next onClick={() => setFilters({...filters, page: filters?.page + 1})}/>
                <Pagination.Last onClick={() => setFilters({...filters, page: totalPage})}/>
            </PaginationWrapper>
        </MovieListWrapper>

    );
};

export default MovieList;

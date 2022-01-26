import {Pagination} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {HeaderItem, MovieListWrapper, MovieTable, PaginationWrapper, RowItem, TotalPage} from "./style";

interface MovieListProps {
    movies: {
        [key: string]: string;
    }[];
    totalPage: number;
    filters: {
        page: number
    };
    setFilters: ({}) => void;
}

const MovieList = ({movies, totalPage, filters, setFilters}: MovieListProps) => {
    const navigate = useNavigate();
    const {page} = {...filters};

    const handlePageChange = (targetpage) => {
        setFilters({...filters, page: targetpage})
    };

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
                <Pagination.First disabled={page === 1} onClick={() => handlePageChange(1)}/>
                <Pagination.Prev disabled={page === 1} onClick={() => handlePageChange(page - 1)}/>
                <Pagination.Item active={true}> {page}</Pagination.Item>
                <Pagination.Next disabled={page === totalPage} onClick={() => handlePageChange(page + 1)}/>
                <Pagination.Last disabled={page === totalPage} onClick={() => handlePageChange(totalPage)}/>
            </PaginationWrapper>
        </MovieListWrapper>

    );
};

export default MovieList;

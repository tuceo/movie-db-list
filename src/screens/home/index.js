import {useEffect, useState} from "react";
import axios from "axios";
import Filters from "../../components/Filters";
import {Spinner} from "react-bootstrap";
import MovieList from "../../components/MovieList";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import {REACT_APP_API_URL} from "../../App";

const Home = () => {
    const [movies, setMovies] = useState(null);
    const [totalPage, setTotalPage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [filters, setFilters] = useState({
        s: "Pokemon",   //title
        y: null,        //year of release
        type: null,     // movie, series, episode
        page: 1,
    });

    useEffect(() => {
        const {s, y, type, page} = {...filters};
        setMovies(null);
        setIsLoading(true);

        axios
            .get(`${REACT_APP_API_URL} + ${(s ? "&s=" + s : "") + (y ? "&y=" + y : "") + (type ? "&type=" + type : "") + (page ? "&page=" + page : "")}`)
            .then((res) => {
                setTotalPage(res?.data?.totalResults > 10 ? res?.data?.totalResults / 10 : 1);
                setMovies(res?.data?.Search)
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false))
    }, [filters]);

    return (
        <>
            <Header>MOVIE DATABASE</Header>
            <Layout  type="flex">
                <Filters filters={filters} setFilters={setFilters}/>
                {isLoading && <Spinner animation="border"/>}

                {!isLoading && (movies?.length > 0 ? <MovieList movies={movies} totalPage={totalPage} filters={filters}
                                                                setFilters={setFilters}/> : "no data")}
            </Layout>
        </>
    );
};

export default Home;

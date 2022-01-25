import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {Button, Spinner} from "react-bootstrap";
import Layout from "../../components/Layout";
import MovieDetails from "../../components/MovieDetails";
import Header from "../../components/Header";
import {REACT_APP_API_URL} from "../../App";

const Detail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState(null);

    const {search} = useLocation();
    const query = new URLSearchParams(search);
    const [imdbID] = useState(query.get("imdbID"));

    useEffect(() => {
        if (imdbID) {
            axios
                .get(`${REACT_APP_API_URL}&i=${imdbID}`)
                .then((res) => {
                    setMovie(res?.data)
                })
                .catch((err) => console.error(err))
                .finally(() => setIsLoading(false))
        }
    }, [imdbID])

    return (
        <>
            <Header>MOVIE DETAILS</Header>
            <Layout>
                <Button variant="outline-primary" onClick={() => window.history.back()}>Back</Button>
                {isLoading && <Spinner animation="border"/>}
                {!isLoading && movie && <MovieDetails movie={movie}/>}
            </Layout>
        </>
    );
};

export default Detail;

import {Card} from "react-bootstrap";
import {MovieCard, MoviePoster} from "./style";

const MovieDetails = ({movie}) => {
    return (
        <MovieCard>
            <MoviePoster src={movie?.Poster}/>
            <Card.Body>
                <Card.Title>{movie?.Title}</Card.Title>
                <Card.Text>Runtime: {movie?.Runtime}</Card.Text>
                <Card.Text>Genre: {movie?.Genre}</Card.Text>
                <Card.Text>Director: {movie?.Director}</Card.Text>
                <Card.Text>Actors: {movie?.Actors}</Card.Text>
                <Card.Text>IMDB Rating: {movie?.imdbRating}</Card.Text>
            </Card.Body>
        </MovieCard>
    );
};

export default MovieDetails;

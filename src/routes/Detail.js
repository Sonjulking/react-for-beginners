import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        try {
            const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            const json = await response.json();
            setMovie(json.data.movie);
            console.log(json);
        } catch (error) {
            console.error("Failed to fetch movie details:", error);
        }
    };

    useEffect(() => {
        getMovie();
    }, [id]);

    if (!movie) return <h1>Loading...</h1>;

    return (
            <div>
                <h1>{movie.title}</h1>
                <p>{movie.description_full}</p>
                <img src={movie.medium_cover_image} alt={movie.title} />
            </div>
    );
}

export default Detail;

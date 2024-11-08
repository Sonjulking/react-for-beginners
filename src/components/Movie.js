import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}) {
    return (
            <div>
                <img src={coverImg} style={{width: "200px"}} alt={title}/>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <p>{summary}</p>
                <ul>
                    {genres.map((g) => (
                            <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired
}
export default Movie;
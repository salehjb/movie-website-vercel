import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./MovieCard.scss";
// Components
import Button from "../button/Button";
// Api
import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const MovieCard = (props) => {
  const item = props.item;
  const link = `/${category[props.category]}/${item.id}`;
  const background = apiConfig.w500Image(
    item.poster_path || item.backdrop_path
  );

  return (
    <Link to={link}>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${background})` }}
        >
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3 style={{ textAlign: "center" }}>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;

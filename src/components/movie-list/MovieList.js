import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Styles
import "./MovieList.scss";
// Libraries
import { Swiper, SwiperSlide } from "swiper/react";
// Components
import MovieCard from "../movie-card/MovieCard";
// Api
import tmdbApi, { category } from "../../api/tmdbApi";

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    };
    getList();
  }, [props.category, props.id, props.type]);

  return (
    <div>
      <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <MovieCard item={item} category={props.category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;

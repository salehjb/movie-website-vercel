import React from 'react';
import { useParams } from 'react-router-dom';
// Components
import PageHeader from "../components/page-header/PageHeader"
import MovieGrid from '../components/movie-grid/MovieGrid';
// Api
import { category as cate } from "../api/tmdbApi"

const Catalog = () => {
    const { category } = useParams()

    return (
        <div>
            <PageHeader>
                {category === cate.movie ? "Movie" : "TV Series"}
            </PageHeader>
            <div className='container'>
                <div className='section mb-3'>
                    <MovieGrid category={category} />
                </div>
            </div>
        </div>
    );
};

export default Catalog;
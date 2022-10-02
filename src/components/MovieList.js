import React, { useState, useEffect, Fragment } from 'react';
import Moment from 'moment';
import { Link } from "react-router-dom"

import PageSelector from './PageSelector';

function MovieBoard(props) {
    const [movies, setMovies]       = useState([]);
    const [pageValue, setPageValue] = useState([]);

    const getMovieRequest = async (page) => {
		const url          = 'https://api.themoviedb.org/3/movie/popular?api_key=b53230662b825a39ca10f0420a2e29c3&language=en-US&page=' + page;
	    const response     = await fetch(url);
	    const responseJson = await response.json();

	    if (responseJson.results) {
	      	setMovies(responseJson.results);
	    } else {
    		alert('Error has occured');
	    }
    };

	useEffect(() => {
    	getMovieRequest(pageValue);
  	}, [pageValue]);
	  

	return (
		<>
			<Fragment>
	          	<PageSelector pageValue={pageValue} setPageValue={setPageValue} />
				{movies.map((movie, index) => (
					<Link key={movie.id} className="col-12 col-sm-6 col-lg-3 movie-item" to={'/movie-details?id=' + movie.id}>
						<div className="movie-subitem">
							<div className="movie-title">{movie.title}</div>
							<div>
								<img className="image-container movie-img" src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="movie poster"/>
							</div>
							{/*Alternative date format: 'MMM Do YYYY' */}
							<div className="movie-data">{'Release Date'}
								<div>{Moment(movie.release_date).format('DD-MM-YYYY')}</div>
							</div> 
							<hr/>
							<div className="movie-data">{'Popularity Rate'}
								<div>{movie.popularity}</div>
							</div>
						</div>
					</Link>
				))}
			</Fragment>
		</>
	);
};

export default MovieBoard;
import React, { useState, useEffect, Fragment } from 'react';
import Moment from 'moment';
import { useSearchParams, Link } from "react-router-dom"

function MovieDetails(props) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [movie, setMovie]               = useState([]);
    const id                              = searchParams.get("id");
    
	const getMovieDetailRequest = async () => {
		const url          = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=b53230662b825a39ca10f0420a2e29c3&language=en-US';
	    const response     = await fetch(url);
	    const responseJson = await response.json();

	    if (responseJson) {
	    	console.log(responseJson);
	      	setMovie(responseJson);
	    } else {
    		alert('Error has occured');
	    }
    };

	useEffect(() => {
    	getMovieDetailRequest();
  	}, []);

	return (
		<>
			{
				<div key={movie.id} className="col-12">
					<div className="row">
						<div className="col-12">
							<Link className="m-3" to="/">Back to Movie List</Link>
						</div>
					</div>
					<div className="row m-4 movie-detail">
						<div className="col-12 movie-detail-title">{movie.title}</div>
						<div className="col-12 col-sm-6 mb-3">
							<img className="image-container" src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="movie poster"/>
						</div>
						<div className="col-12 col-sm-6">
							<div className="movie-detail-data">
								<div className="movie-detail-heading">{'Original Title'}</div>
								<div>{movie.original_title}</div>
							</div> 
							<div className="movie-detail-data">
								<div className="movie-detail-heading">{'Original Language'}</div>
								<div>{movie.original_language}</div>
							</div> 
							<div className="movie-detail-data">
								<div className="movie-detail-heading">{'Release Date'}</div>
								<div>{Moment(movie.release_date).format('DD-MM-YYYY')}</div>
							</div> 
							<div className="movie-detail-data">
								<div className="movie-detail-heading">{'Popularity Rate'}</div>
								<div>{movie.popularity}</div>
							</div>
							<div className="movie-detail-data">
								<div className="movie-detail-heading">{'Tagline'}</div>
								<div>{movie.tagline}</div>
							</div>
							<div className="movie-detail-data">
								<div className="movie-detail-heading">{'Overview'}</div>
								<p className="movie-detail-overview">{movie.overview}</p>
							</div> 
						</div>
					</div>
				</div>
			}
		</>
	);
};

export default MovieDetails;
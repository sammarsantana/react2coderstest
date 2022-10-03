import React, { useState, useEffect, Fragment } from 'react';
import { Routes, Route, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import MovieDetails from './components/MovieDetails';


function App() {    
  return (
    <div className='container-fluid movie-app'>
      <Fragment>
        <header className='row justify-content-center m-3'>
          <MovieListHeading heading='This is a Wonderful World' />
        </header>
        <main className="row justify-content-start">
          <Routes>
            <Route path="/" element={ <MovieList /> } />
            <Route path="/movie-details" element={ <MovieDetails /> } />
          </Routes>
        </main>
        <footer className='row m-3'>
          <div className='col-12 text-center'>
            © Developed by Samuel Márquez Santana
          </div>
        </footer>
      </Fragment>
    </div>
  );
};

export default App;

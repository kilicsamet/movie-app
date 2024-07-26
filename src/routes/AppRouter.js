import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from '../pages/MoviesList';
import MovieDetail from '../pages/MovieDetail';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movies" element={<MovieList />} />
      <Route path="movie/:id" element={<MovieDetail />}/>
    </Routes>
  );
};

export default AppRouter;

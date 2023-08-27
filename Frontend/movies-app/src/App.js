import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Route and Routes from react-router-dom
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetail/MovieDetail';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

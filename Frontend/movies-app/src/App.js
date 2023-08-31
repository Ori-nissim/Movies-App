import React from 'react';
import { BrowserRouter ,Route, Routes} from 'react-router-dom'; // Import Route and Routes from react-router-dom
import NavigationBar from './components/NavigationBar/NavigationBar';
import './App.css';
import MovieList from './components/movie-list/movie-list.component';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movies/:id" element={<MovieDetail />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
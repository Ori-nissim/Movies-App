import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Route and Routes from react-router-dom
import NavigationBar from './components/navigation-bar/NavigationBar';
import './App.css';
import MovieList from './components/movie-list/movie-list.component';
import MovieDetail from './components/movie-detail/movie-deatils.component';
import LoginPage from './pages/login/login.page';
import RegisterPage from './pages/register/register.page';
import { AuthContext } from './contexts/auth.context';

function App() {

  const [user, setUser] = useState("Guest");

  return (
    <div className="app-container">
      <BrowserRouter>

        <AuthContext.Provider value={{user, setUser}}>

          <NavigationBar></NavigationBar>

          <Routes>
            <Route path="/" element={<MovieList title="Popular Movies"/>} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

          </Routes>

        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
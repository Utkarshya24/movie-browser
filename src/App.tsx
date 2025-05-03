import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </Router>
);

export default App;

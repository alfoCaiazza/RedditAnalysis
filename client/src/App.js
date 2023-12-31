import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Features from './components/Features';
import Header from './components/Header';
import Footer from './components/Footer';
import Results from './components/Results';
import FilteredPosts from './components/FilteredPosts';
import Trends from './components/Trends';
import './components/homepage.css';
import './components/features.css';
import './components/header.css';
import './components/card.css';
import './components/filteredposts.css';
import './components/monthlyTrends.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/filtered_posts" element={<FilteredPosts />} />
        <Route path="/hot_themes" element={<Features />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/keywords" element={<Features />} />
        <Route path="/shadow" element={<Features />} />
        <Route path='/results' element={<Results />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

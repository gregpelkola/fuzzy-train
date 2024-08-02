import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails'; // create this component

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<EventList />} />
      <Route path="/events/:id" element={<EventDetails />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
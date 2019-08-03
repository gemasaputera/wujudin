import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/main.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/pages/home/Home';
import Construction from './components/pages/condition/Construction';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} /> 
      <Route path="/cons" component={Construction} /> 
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import LandingPage from './components/home'
import { Route } from 'react-router-dom';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Route path='/' component={LandingPage} />
      <Footer />
    </div>
  );
}

export default App;

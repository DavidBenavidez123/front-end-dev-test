import React from 'react';
import './App.css';
import LandingPage from './components/home'
import { Route } from 'react-router-dom';
import Footer from './components/footer'
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';

function App() {
  return (

    <div className="App">
      
      <Route exact path="/" component={LandingPage} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/Contact" component={Contact} />
      <Footer />

    </div>
  );
}

export default App;

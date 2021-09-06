import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Header, Footer, Content, Home } from './components/ComponentMixing.js';
import logo from './logo.svg';
import './assets/css/style.css';


function App() {
  return (
    <div className="App">
	    <Router>
	       <Header />
	       <Content />
	       <Footer />
	    </Router>
    </div>
  );
}

export default App;

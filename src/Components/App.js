import React from 'react';
import './../Css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import NewsDetail from './NewsDetail';
import Contact from './Contact';
import DieuHuongURL from '../Router/DieuHuongURL';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Nav />
        <DieuHuongURL/>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;

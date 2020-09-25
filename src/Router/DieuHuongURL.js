import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Contact from '../Components/Contact';
import Home from '../Components/Home';
import News from '../Components/News';
import NewsDetail from '../Components/NewsDetail';
  
class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/tin"><News /></Route>
                <Route exact path="/tinchitiet"><NewsDetail /></Route>
                <Route exact path="/contact"><Contact /></Route>
            </div>
        );
    }
}

export default DieuHuongURL;
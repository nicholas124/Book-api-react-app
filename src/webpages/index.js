import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './home';
import Book from './book';
const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route path = "/book/:id" component = {Book} />
        </Router>
    );
};
export default Webpages;
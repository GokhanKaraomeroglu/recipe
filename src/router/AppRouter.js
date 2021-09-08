import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import About from '../pages/about/About'

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
            </Switch>
        </Router>
    )
}

export default AppRouter
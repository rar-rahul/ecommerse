import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {
    return ( 
        <Router>
        <div className = "App">
            <Navigation/>
         </div>
         </Router>
    );
}

export default App;
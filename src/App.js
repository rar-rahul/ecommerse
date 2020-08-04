import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Login from './components/Login'
import Navigation from './components/Navigation';
import Home from './components/Home';


function App() {
    return ( 
        <Router>
        <div className = "App">
         <Navigation/> 
         <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
  
         </div>
         </Router>
    );
}

export default App;
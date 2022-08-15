// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Now from './components/Now/Now';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
  
class App extends Component {

    render(){
        return(
            <Router>
                <Routes>
                    <Route path='/Now' element={<Now/>} />
                    <Route path='/' element={<Home/>} />
                </Routes>
            </Router>
        )
    }


}

export default App;
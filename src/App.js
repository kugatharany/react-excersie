import React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom"
import Home from "./Component/home"
import Register from "./Component/register"
class App extends React.Component {
  
  render(){
  return (
    <div className="App">
    <Router>
        <ul className="ulstyle">
          <li><NavLink to='/' exact strict>Home</NavLink></li>
          <li><NavLink to='/register' exact strict>Register</NavLink></li>
      </ul>
        <Route path='/' exact component={Home} />  
        <Route path='/register' exact component={Register} />
    </Router>
      
    </div>
  );
}
}
export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logintbygoogle from './Logintbygoogle'
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
function App() {
  return (
    <>
   <div className="App">  
     <Router>    
      <div className="container">   
        <Switch>    
          <Route exact path='/' component={Logintbygoogle} ></Route>    
          <Route path='/Dashboard' component={Dashboard} ></Route>     
        </Switch>    
      </div>    
    </Router>    
    </div>  
   </>
  );
}
export default App;
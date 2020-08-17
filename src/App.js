import React from 'react';
import './App.css'
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';



import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './Navbar.css'






function App() {
  return (
  	<div>
  	<BrowserRouter>
    <div className="App">
    <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/services" component={Services}/>
        </Switch>
      </div>
      </BrowserRouter>
      
      </div>

     
     


   );
}

export default App;

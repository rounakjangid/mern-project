import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Recipes from './components/Recipes';
import {search,onSearchClick,recipes} from './App';
import RecipeItem from './components/RecipeItem';



ReactDOM.render(
  
 
  
  <React.StrictMode>
      
 
   
  
     <BrowserRouter>
   
     <Switch>
        <Route exact path="/About">
         <h1>About us</h1>
         <About />
 
       </Route>
       <Route exact path="/Login">
         <h1 style={{textAlign:"center"}}>Log In</h1>
         <Login />
 
       </Route>

       <Route exact path="/Signup">
         <h1 style={{textAlign:"center"}}>SignUp</h1>
        <Signup />
 
       </Route>
       
     
     
       </Switch>
     </BrowserRouter>
     <App/>
     </React.StrictMode>,
  
  document.getElementById('root')
);



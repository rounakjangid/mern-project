
import React,{useEffect,useState} from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import RecipeItem from './components/RecipeItem';
import About from './components/About';
import Login from './components/Login';
import signup from'./components/Signup';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Axios from "axios";


function App() {
  
 const [search , setSearch] = useState("search");
  const [recipes, setRecipes] = useState([]);

  const APP_ID ="bc7dc0cd";
  const APP_KEY = "a6a2673f86b883e934ca178f5e3fedd5 ";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=bc7dc0cd&app_key=a6a2673f86b883e934ca178f5e3fedd5`);
    setRecipes(res.data.hits);
  };

const onInputChange = (e) =>{
    setSearch(e.target.value);
    
  }
 const onSearchClick = () => {
    getRecipes();
  };
  return (
    <Router>
    
     <div className="App">
     <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
     /> 
     
      <div className="container">
        <Recipes recipes={recipes} />
      
      </div>
     
    </div>
    </Router>
   );
  
}

export default App;



import React from "react";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {Switch, NavLink} from 'react-router-dom';


const Header = (props) => {
    const {search, onInputChange, onSearchClick} = props;
    return(
        <div>
            <Switch>

            <Navbar className="color" expand="lg" style={{}}  >

      <Nav className="mr-auto">
      <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
      <Nav.Link href="/about" style ={{color:"white"}}>About</Nav.Link>
      <Nav.Link href="/Login" style={{color:"black"}}>
          <button className="btn btn-dark">Login</button></Nav.Link>
      <Nav.Link href="/signup" style={{color:"black"}}>
      <button className="btn btn-dark">Sign up</button></Nav.Link>
      
     </Nav>
     </Navbar>
     </Switch>
     
     

        <div className ='jumbotron' style={{backgroundColor:"#ff3f34"}}>
        <h1 className="display-1"> Food Recipes</h1>
        <br/>
        
        
        <div class="input-group w-50 mx-auto">
            <input type="text" class="form-control"  placeholder="Search Your Favourite Recipe... " value={search}  onChange={onInputChange}></input>
  
       <div class="input-group-append">
        <button className="btn btn-dark"  onClick={onSearchClick}>Search Recipe</button>
    
    </div>
        </div>
        </div>
        </div>
    
        

        
        
        
    );
};

export default Header;
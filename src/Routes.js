import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Vegetable from "./components/Vegetable"
import SlidingCarousel from "./components/SlidingCarousel";
import Home from './components/Home'


function Routes() {
    return (
        <div>
        <Router>
        <Switch>
        <Route path="/signout">   
        <h2>Signout</h2>    
        </Route>    
        <Route path="/wishlist">
        <Header/>    
        <h2>Wishlist</h2>    
        </Route>       
        <Route path="/cart">
        <Header/>    
        <h2>Cart</h2>    
        </Route>    
        <Route path="/login">
        <Login/> 
        </Route>
        <Route path="/contact">
        <Header/>
        <h2>Contact</h2>
        </Route>
        <Route path="/organic">
        <Header/>
        <Vegetable/>
        <Footer/>
        </Route>
        <Route path="/daily products">
        <Header/>
        <Vegetable/>
        <Footer/>
        </Route>
        <Route path="/fruits">
        <Header/>
        <Vegetable/>
        <Footer/>
        </Route>
        <Route path="/vegetable">
        <Header/> 
        <Vegetable/>   
        <Footer/>  
        </Route>
        <Route path="/">
        <Header/>
        <SlidingCarousel/>
        <Home/>
        <Footer/>
        </Route>
        </Switch>
        </Router>
        </div>
    )
}

export default Routes;

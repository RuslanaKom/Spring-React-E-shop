import React, { Component } from 'react';
import './App.css';
import BeerContainer from './beer/BeerContainer';
import BeerListContainer from "./beer/BeerListContainer"
import NavigationComponent from './Navigation/NavigationComponent';
import {Route} from 'react-router-dom';
import ShoppingCartFull from './ShoppingCart/ShoppingCartFull';
import Contacts from './Contacts/Contacts';
import Footer from './Contacts/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <NavigationComponent/>
       <Route exact path="/" component={BeerListContainer} />
        <Route path="/beer/:searchName" component={BeerContainer} />
        <Route path="/cart" component={ShoppingCartFull} />
        <Route path="/contacts" component={Contacts} />
        <Footer/> */}
      </div>
    );
  }
}

export default App;

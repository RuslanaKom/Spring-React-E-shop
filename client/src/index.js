import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import BeerContainer from './beer/BeerContainer';
import BeerListContainer from "./beer/BeerListContainer"
import NavigationComponent from './Navigation/NavigationComponent';
import {Route} from 'react-router-dom';
import ShoppingCartFull from './ShoppingCart/ShoppingCartFull';
import Contacts from './Contacts/Contacts';
import Footer from './Contacts/Footer';


// ReactDOM.render(
//     <Router>
//       <App />
//     </Router>, document.getElementById('root'));
//   serviceWorker.unregister();

  ReactDOM.render(
    <Router>
      <div className="App">
       <NavigationComponent/>
       <Switch>
        <Route exact path="/" component={BeerListContainer} />
        <Route path="/beer/:searchName" component={BeerContainer} />
        <Route path="/cart" component={ShoppingCartFull} />
        <Route exact path="/contacts" component={Contacts} />
        </Switch>
        <Footer/>
        </div>
    </Router>, document.getElementById('root'));
  serviceWorker.unregister();

/*
ReactDOM.render(<App />, 
<BrowserRouter>
    <Route exact path="/" component={BeerListContainer} />
    <Route path="/beer" component={BeerContainer} />
   </BrowserRouter>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
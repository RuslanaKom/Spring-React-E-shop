import React from 'react';
import BeerComponentForList from './BeerComponentForList';
import CategoryDropdown from '../Navigation/CategoryDropdown';
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import '../App.css';


class BeerListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            beers: [],
            searchCategory:"",
            beerToCart: ""
         };
         this.updateCategory = this.updateCategory;
         this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
         //fetch('http://localhost:8090/beers')
         fetch('/beers')
            .then(response => response.json())
            .then(data => this.setState({
                beers: data,
              }));
        }

    handleClick(beer) {
        this.setState({
            beerToCart: beer
        })
       // fetch('http://localhost:8090/puttocart', {
        fetch('/puttocart', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(beer)    
        });
    }

    updateCategory=(text) =>{
        this.setState({ searchCategory: text })
    }

    render() {
        const beerList = this.state.beers.filter(beer=>this.state.searchCategory==="" || beer.category.categoryName===this.state.searchCategory).map((beer, index) => {                
            return (
                <BeerComponentForList
                    key={index}
                    beer={beer}
                    handleClick={this.handleClick}
                    />
                );
            });
            return (
            <div>
            <div className="row">  
            <ShoppingCart passedVal={this.state.beerToCart} />
            <CategoryDropdown updateSearchCategory={this.updateCategory} />
            </div>
            <div className="row">  
            {beerList}
            </div>
            </div>
            );
        }
}

export default BeerListContainer;
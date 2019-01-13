import React from 'react';
import BeerComponent from './BeerComponent';

class BeerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            description: "",
            price: 0,
            image: "",
            categoryName:"",
        };
    }

    componentWillMount() {
        const {searchName}= this.props.match.params
      // fetch(`http://localhost:8090/beer/`+searchName)
       fetch(`/beer/`+searchName)
        .then(response => response.json())
        .then(data => this.setState({
            name: data.name,
            description: data.description,
            price: data.price,
            image: data.imagePath,
            categoryName: data.category.categoryName
          }));
    }

    render() {
        
        return (
            <BeerComponent name={this.state.name}
                                 description={this.state.description}
                                 price={this.state.price}
                                 image={this.state.image}
                                 categoryName={this.state.categoryName}
            />
        );
    }
    
}

    export default BeerContainer;
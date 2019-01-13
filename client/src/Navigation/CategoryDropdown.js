import React from 'react';
import { FormGroup, FormControl} from 'react-bootstrap';


class CategoryDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          categorySelected: '',
          categories: []
        }
      }

    handleChange(e) {
        this.setState({ categorySelected: e.target.value });
        this.props.updateSearchCategory(e.target.value);
      }
  
      componentDidMount() {
       // fetch('http://localhost:8090/categories')
        fetch('/categories')
        .then(response => response.json())
        .then(data => this.setState({
            categories: data
          }));
    }
   
  render() {
            const options = this.state.categories.map((category, index )=> {                
                return (
                    <option value={category.categoryName} key={index}>{category.categoryName}</option>
                );
            });

            return (
                <div className="d-inline col-md-3 pull-right">
                <FormGroup controlId="formControlsSelect">
                <FormControl 
                componentClass="select" 
                placeholder="Category" 
                type="text"
                value={this.state.categorySelected}
                onChange={this.handleChange}>
                    <option value="">All Categories</option>
                    {options}
                </FormControl>
             </FormGroup>
             </div>
            );
        }
    }
    export default CategoryDropdown;
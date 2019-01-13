import React from 'react';
import{ OverlayTrigger,Badge,Tooltip} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            totalPrice: 0.0,
            quantity:0
        };
      //  this.addToCart = this.addToCart
    }

    componentDidMount(){
        // fetch('http://localhost:8090/cart')
        fetch('/cart')
        .then(response => response.json())
        .then(data => {this.setState({
            products: data.cart,
            totalPrice: data.totalSum
          })}
          );
    }

    componentWillReceiveProps(){
   // fetch('http://localhost:8090/cart')
    fetch('/cart')
    .then(response => response.json())
    .then(data => {console.log(data);this.setState({
        products: data.cart,
        totalPrice: data.totalSum
      })}
      );
}

render() {
    var newQuantity=0;
    if(this.state.products){
    newQuantity=this.state.products.reduce((q, product)=>q+=product.quantity,0);
    }

    const tooltip = (
        <Tooltip id="tooltip">
         {this.state.totalPrice.toFixed(2)} Eur.
        </Tooltip>
      );


    return(<div className="d-inline col-md-1 pull-right">
         <OverlayTrigger placement="bottom" overlay={tooltip}>
             <Link to='/cart'> 
                 <span className="glyphicon glyphicon-shopping-cart"/>
            </Link> 
        </OverlayTrigger>
             <Badge>{newQuantity} </Badge> 
         </div>)
         
    }
}
export default ShoppingCart;
import React from 'react';
import{Popover, OverlayTrigger, Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class ShoppingCartFull extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            totalPrice: 0.0,
        };
        this.getData = this.getData
    }

componentDidMount(){
this.getData()
}

 getData(){
    //fetch('http://localhost:8090/cart')
    fetch('/cart')
    .then(response => response.json())
    .then(data => {this.setState({
        products: data.cart,
        totalPrice: Math.abs(data.totalSum)
      })}
      );
}

handleClearClick = () => {
    //fetch('http://localhost:8090/clearCart')
    fetch('/clearCart')
    this.getData()
}

handleRemoveClick = (name) => {
    console.log('trying to remove')
    //fetch('http://localhost:8090/removefromcart', {
    fetch('/removefromcart', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: name   
    });
    this.getData()
}


render() {
    const items= this.state.products.map((product, index )=> {                
        return (
            <tr>
                <td>{index+1}. </td>
                <td>{product.name}</td>
                <td>{product.price} Eur</td>
                <td>{product.quantity} pcs.</td>
                <td>
                    <Button onClick={this.handleRemoveClick.bind(this, product.name)}>
                    <span class="glyphicon glyphicon-trash"></span>
                    </Button>
                </td>
            </tr>
        );
    });

    const popoverTop = (
        <Popover id="popover-positioned-top" title="Order">
         Your order for {this.state.totalPrice.toFixed(2)} Eur is placed.
        </Popover>
      );
    
    return(<div className="col-md-5 static-modal"> 
<Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Product</th>
      <th>Unit price</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
  {items}
  <tr>
      <td></td>
      <td></td>
      <td>Total: </td>
      <td>{this.state.totalPrice.toFixed(2)} Eur</td>
  </tr>
  </tbody>
</Table>

    <OverlayTrigger trigger="click"  rootClose placement="top" overlay={popoverTop}>
        <Button disabled={this.state.totalPrice<0.01}> Confirm Order</Button>
    </OverlayTrigger>

    <Button disabled={this.state.totalPrice<0.01} onClick={this.handleClearClick}>Clear Cart</Button>
    </div>)}
}
export default ShoppingCartFull;
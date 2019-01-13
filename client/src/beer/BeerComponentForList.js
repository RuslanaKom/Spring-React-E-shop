import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

const ImageList = {
    1: require("./img/1.png"),
    2: require("./img/2.png"),
    3: require("./img/3.png"),
    4: require("./img/4.png"),
    5: require("./img/5.png"),
   }

const BeerComponentForList = (props) => {
    return (
        <div className="container col-md-3">
                     <img src={ImageList[props.beer.imagePath]} alt="Beer" width="100px"/>
                    <h5>{props.beer.name}</h5>
                    <p>Price: {props.beer.price} Eur.</p>
                     <Link to={"/beer/" + props.beer.name}>
                        <Button >
                            Details
                        </Button>
                    </Link>
                    <Button  onClick={props.handleClick.bind(this, props.beer)}> Buy</Button>
                </div>
    );
}


export default BeerComponentForList;
import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ImageList = {
    1: require("./img/1.png"),
    2: require("./img/2.png"),
    3: require("./img/3.png"),
    4: require("./img/4.png"),
    5: require("./img/5.png"),
   }

const BeerComponent = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
               <img src={ImageList[props.image]} alt="Beer" width="150px"/>
                </div>
                <div className="col-md-3">
                    <h5>{props.name}</h5>
                     <p>{props.description}</p>
                     <p>{props.categoryName}</p>
                    <p>Price: {props.price} Eur.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Link to="/">
                        <Button >Back</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

BeerComponent.propTypes = {
    image:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default BeerComponent;
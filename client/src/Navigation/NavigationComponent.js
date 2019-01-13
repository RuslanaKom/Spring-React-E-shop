import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationComponent extends React.Component {

    render(){
       const appNavbar=( <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">BeerShop</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/">
                    <Link to="/">
                        Products
                    </Link>
                </NavItem>
                <NavItem eventKey={2}>
                    <Link to="/contacts">
                        Contacts
                    </Link>
                </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem>
                </NavItem>
            </Nav>
           
        </Navbar>
       )
 return (
            <div>
              {appNavbar}
            </div>
 )
}

}
export default NavigationComponent;

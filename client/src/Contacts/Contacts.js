import React from 'react';
import logo from '../beer/img/c.jpg';
import {Label,Image,Jumbotron,FormGroup,ControlLabel,FormControl,Button,OverlayTrigger,Popover} from 'react-bootstrap';
import '../App.css';

class Contacts extends React.Component {

    render(){
        const popoverTop = (
            <Popover id="popover-positioned-top" title="Thank you!">
                Your message was sucessfully ignored!
            </Popover>
          );

        const cont = (
             <div>
                 <Jumbotron>
                    <div className="row">
                        <div  className='margins'>
                            <h2>
                                <Label>Happy Grasshopper</Label>
                            </h2>
                        </div>
                        <Image  src={logo} circle width="140px" />
                    </div>  
                </Jumbotron>
                <div className="text-center col-md-4 col-md-offset-4">
                    <FormGroup controlId="formControlsTextarea" >
                        <ControlLabel>Contact us</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Please fill in the form" />
                    </FormGroup>
                    <OverlayTrigger trigger="click"  rootClose placement="top" overlay={popoverTop}>
                        <Button type="submit">Submit</Button>
                    </OverlayTrigger>
                </div>
            </div>
        )

    return (
        <div>
            {cont}
        </div>
        )
    }
}
    export default Contacts;
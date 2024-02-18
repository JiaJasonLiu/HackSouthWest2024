import '../css/index.css';
import '../css/home.css';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from 'react-bootstrap/Button';
import {MDBCard, MDBContainer, MDBInput} from "mdb-react-ui-kit";

function PopupWin(props) {
    return(
        <div>
            <Popup trigger={<Button className='butt' variant="danger">{props.choice}</Button>} position="right center">
                <MDBContainer>
                    <MDBCard>
                        <form>ENTER CARD NUMBER</form>
                        <MDBInput label="Card Number" id="form1" type="text" placeholder="1234 5678 9012 3457"/>
                    </MDBCard>
                    <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" width="64px"/>
                    <MDBCard>
                        <form>ENTER CARDHOLDER NAME</form>
                        <MDBInput label="Cardholder Name" id="form1" type="text" placeholder="John Smith"/>
                    </MDBCard>
                    <MDBCard>
                        <form>ENTER CARD EXPIRATION</form>
                        <MDBInput label="Expiration" id="form1" type="text" placeholder="12/12"/>
                    </MDBCard>
                    <MDBCard>
                        <form>ENTER CARD CVV</form>
                        <MDBInput label="CVV" id="form1" type="text" placeholder="123"/>
                    </MDBCard>
                </MDBContainer>
                <Button className='butt' variant="danger">{props.choice}</Button>
            </Popup>
        </div>
  )
}

export default PopupWin;
import '../css/index.css';
import '../css/home.css';
import StockRotator from '../components/stockRotator';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Stock() {
  return (
    <div className="stock">
      <div className='title1 container'>
      <StockRotator></StockRotator>
      </div>
      <div className='container'>
        <h1 className='centered title1'>BUY YOUR ETHERIUM!!!</h1>
      </div>
      <div className='stockInfo'>
        <Container className='stockInfo'>
            <Row>
                <Col>
                    <div>
                        <p className='stockName'>Etherium</p>
                        <p className='stockInfo'>ETH</p>
                        <p className='stockInfo'>£50000</p>
                        <p className='stockInfo'>(0.0014%)</p>
                        <Button className='butt' variant="danger">BUY</Button>
                        <Button className='butt' variant="danger">SELL</Button>

                    </div>
                </Col>
                <Col>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Line_chart.png" width="800" height="400" alt="graph-img"></img>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  );
}

export default Stock;

import '../css/index.css';
import '../css/home.css';
import StockRotator from '../components/stockRotator';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
// import 'reactjs-popup/dist/index.css';
import axios from 'axios';


const baseURL = "http://localhost:3001/get_stock_price"

function Stock() {
  
  const [post, setPost] = React.useState(null);
  var stock = window.location.href.split("=")[1]

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  var stockName
  var stockPrice
  var stockChange
  var stockChangePercent


  if (!post) return null;
  for (const [key, value] of Object.entries(post)) {
    if (key.split(";")[1] === stock){
      stockName = key.split(";")[0]
      stockPrice = value.split(";")[0]
      stockChange = value.split(";")[1]
      if (stockChange > 0){
        stockChange = "+" + stockChange
      }

      stockChangePercent = value.split(";")[2]
    }
  }
  const stockPriceDiscounted = (stockPrice * .80).toFixed(2)

  return (
    <div className="stock">
      <div className='title1 container'>
      <StockRotator></StockRotator>
      </div>
      <div className='container'>
        <h1 className='centered title1'>BUY YOUR {stock}!!!</h1>
      </div>
      <div className='stockInfo'>
        <Container className='stockInfo'>
            <Row>
                <Col>
                    <div>
                        <b className='stockName'>{stockName}</b>
                        <p className='stockInfo'>
                          <b>Market Price: </b> {stockPrice}</p>
                        <p className='stockInfo'>
                          <b>Asia++ Price: </b> {stockPriceDiscounted} (-20%)</p>
                        <p className='stockInfo'>{stockChange}</p>
                        <p className='stockInfo'>({stockChangePercent}%)</p>
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

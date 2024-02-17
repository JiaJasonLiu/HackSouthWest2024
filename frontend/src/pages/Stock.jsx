// import '../index.css';
import '../css/home.css';
import StockRotator from '../components/stockRotator';

function Stock() {
  return (
    <div className="home">
      <div className='title1 container'>
      <StockRotator></StockRotator>
      </div>
      <div className='container'>
        <h1 className='centered title1'>BUY YOUR ETHERIUM!!!</h1>
      </div>
    </div>
  );
}

export default Stock;

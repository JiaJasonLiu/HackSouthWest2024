// import '../index.css';
import '../css/home.css';
import StockRotator from '../components/stockRotator';
import NewsBox from '../components/newsBox';

function Home() {
  return (
    <div className="home">
      <div className='title1 container'>
      <StockRotator></StockRotator>
      </div>
      <div className='container'>
        <h1 className='centered title1'>Save your money using Asians++ Trading</h1>
      </div>
      <NewsBox></NewsBox>
    </div>
  );
}

export default Home;

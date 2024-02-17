// import '../index.css';
// import '../home.css';
import LoginBox from '../components/loginbox';
import Header from '../components/header';


function Home() {
  return (
    <div className="home">
      <div className='container'>
        <h1 className='centered title1'>Save your momney using EXCS BANK</h1>
      </div>
      <div className='container'>
       <LoginBox></LoginBox>
      </div>
    </div>
  );
}

export default Home;

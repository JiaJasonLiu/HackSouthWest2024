import '../index.css';
import '../about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutBoxMain from '../components/aboutboxmain';
import Review from '../components/review';

function About() {

  return (
    <div className="About">
          <AboutBoxMain></AboutBoxMain>
          <Review style = {{ margin: '50px'}}></Review>
          <div style = {{ marginTop: '50px'}}>
            <h2>The Asians++ Team</h2>
            <p>Team Members: Yousuf Ahmed, Will Baldwin, Kyle Deladia, Jason Liu</p>
            <ul>
              <a href='https://github.com/yousufaahmed'>Yousuf Ahmed</a>
              <a href='https://github.com/William-Baldwin'>Will Baldwin</a>
              <a href='https://github.com/threelyK'>Kyle Deladia</a>
              <a href=''>Dariush Tomlinson</a>
              <a href='https://github.com/JiaJasonLiu'>Jason Liu</a>
            </ul>
          </div>
    </div>
  );
}

export default About;

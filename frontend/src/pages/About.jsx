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
            <h2>Who are the founders of LITTERALLY!?</h2>
            <p>Yousuf Ahmed: CEO and co-founder of LITTERALLY</p>
            <p>Marty Mcfly: CTO and co-founder of LITTERALLY</p>
            <p>Peter Parker: CMO and co-founder of LITTERALLY</p>
            <p>Bruce Wayne: CFO and co-founder of LITTERALLY</p>
          </div>
          {/* me, x, y and z are the founders of LITTERALLY! */}
    </div>
  );
}

export default About;

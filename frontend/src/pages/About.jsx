import '../css/index.css';
import '../css/about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/aboutBox';
import AboutBox from '../components/aboutBox';

function About() {

  return (
    <div className="About centered text-centered">
      <AboutBox></AboutBox>
    </div>
  );
}

export default About;

import '../css/index.css';
import '../css/about.css';

function About() {

  return (
    <div className="About">
          <div style = {{ marginTop: '50px'}}>
            <h2>The Asians++ Team</h2>
            <h4>Team Members</h4>
            <div className='memberInfoLeft'>
              <p id='YA'>
                <h6 className='nameLeft'>Yousuf Ahmed</h6>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ullam dolorum fuga fugiat doloribus, magni non. At consequatur, molestias nihil magni perspiciatis ipsum asperiores alias natus delectus. Autem, itaque distinctio!
              </p>
            </div>
            <p id='WB'>Will Baldwin</p>
            <p id='KD'>Kyle Deladia</p>
            <p id='JL'>Jason Liu</p>
            <p id='DT'>Dariush Tomlinson</p>
            <ul>
                <li><a href='https://github.com/yousufaahmed'>Yousuf Ahmed</a></li>
                <li><a href='https://github.com/William-Baldwin'>Will Baldwin</a></li>
                <li><a href='https://github.com/threelyK'>Kyle Deladia</a></li>
                <li><a href=''>Dariush Tomlinson</a></li>
                <li><a href='https://github.com/JiaJasonLiu'>Jason Liu</a></li>
            </ul>
          </div>
    </div>
  );
}

export default About;

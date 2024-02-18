import '../css/index.css';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentCard from '../components/contentCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UoE_logo from '../images/UoE_logo.png';
import UoB_logo from '../images/UoB_logo.gif';

let imgList = [
  'https://avatars.githubusercontent.com/u/76410737?v=4',
  'https://avatars.githubusercontent.com/u/45295662?v=4',
  'https://avatars.githubusercontent.com/u/146539806?v=4',
  'https://avatars.githubusercontent.com/u/95042312?v=4',
  'https://avatars.githubusercontent.com/u/87239935?v=4'
]
let memberList = ['Yousuf Ahmed', 'Will Baldwin', 'Kyle Deladia', 'Jason Liu', 'Dariush Tomlinson']
let textList = [
  'University of Exeter',
  'University of Exeter',
  'University of Exeter',
  'University of Bath',
  'University of Exeter'
]
let gitLink = [
  'https://github.com/yousufaahmed',
  'https://github.com/William-Baldwin',
  'https://github.com/threelyK',
  'https://github.com/JiaJasonLiu',
  'https://github.com/notdari'
]

function AboutBox(){
    return(
        <div className =  'centered' style={{ color: '#000000'}}>
             <div style = {{ marginTop: '1%'}}>
              <div className='TeamInfo'>
                <img id='UoE' src={UoE_logo} alt='University of Exeter Logo' width='200px' />
                <div className='border teamName'>
                    <h2>The Asians++</h2>
                    <h4>Team Members</h4>
                </div>
                <img id='UoB' src={UoB_logo} alt='University of Bath Logo' width='200px' height='82px' />
              </div>

              <div className='memberInfoCard'>
                <Row>
                  <Col><ContentCard profileImage={imgList[0]} member={memberList[0]} text={textList[0]} link={gitLink[0]}></ContentCard></Col>
                  <Col><ContentCard profileImage={imgList[1]} member={memberList[1]} text={textList[1]} link={gitLink[1]}></ContentCard></Col>
                  <Col><ContentCard profileImage={imgList[2]} member={memberList[2]} text={textList[2]} link={gitLink[2]}></ContentCard></Col>
                  <Col><ContentCard profileImage={imgList[3]} member={memberList[3]} text={textList[3]} link={gitLink[3]}></ContentCard></Col>
                  <Col><ContentCard profileImage={imgList[4]} member={memberList[4]} text={textList[4]} link={gitLink[4]}></ContentCard></Col>
                </Row>
              </div>

            <p className='Disclaimer'>
              <b>Disclaimer:</b> This website is an educational tool to teach individuals about financial scams.
            </p>
          </div>
        </div>
    );
}

export default AboutBox;
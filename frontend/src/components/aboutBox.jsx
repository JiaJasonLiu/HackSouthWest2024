import '../css/index.css';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentCard from '../components/contentCard';
import UoE_logo from '../images/UoE_logo.png';
import UoB_logo from '../images/UoB_logo.gif';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let imgList = [
  'https://avatars.githubusercontent.com/u/76410737?v=4',
  'https://avatars.githubusercontent.com/u/45295662?v=4',
  'https://avatars.githubusercontent.com/u/146539806?v=4',
  'https://avatars.githubusercontent.com/u/95042312?v=4',
  'https://avatars.githubusercontent.com/u/87239935?v=4'
]
let memberList = ['Yousuf Ahmed', 'Will Baldwin', 'Kyle Deladia', 'Jason Liu', 'Dariush Tomlinson']
let textList = [
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum',
  'Lorem ipsum'
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
                <img src={UoE_logo} alt='University of Exeter Logo' width='200px' />
                <div className='border'>
                  <h2>The Asians++</h2>
                  <h4>Team Members</h4>
                </div>
                <img src={UoB_logo} alt='University of Bath Logo' width='200px' height='82px' />
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



            {/*<div className='memberInfo contentLeft'>
              <p>
                <h6 className='nameLeft'>
                <a href='https://github.com/yousufaahmed' target='_blank' rel="noreferrer noopener"><img src='https://img.icons8.com/?size=256&id=62856&format=png' width='20px' height='20px'/>
                Yousuf Ahmed
                </a>
                </h6>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ullam dolorum fuga fugiat doloribus, magni non. At consequatur, molestias nihil magni perspiciatis ipsum asperiores alias natus delectus. Autem, itaque distinctio!
              </p>
            </div>
            <div>
              <p className='memberInfo contentRight'>
                <h6 className='nameRight'>
                <a href='https://github.com/William-Baldwin' target='_blank' rel="noreferrer noopener"><img src='https://img.icons8.com/?size=256&id=62856&format=png' width='20px' height='20px'/>
                Will Baldwin
                </a>
                </h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus mollitia, officiis nemo sequi fugit dolor eius ipsa? Ut voluptates quas, accusantium tempore tempora nihil enim inventore delectus! Repudiandae, qui neque.
              </p>
            </div>
            <div className='memberInfo contentLeft'>
              <p>
                <h6 className='nameLeft'>
                <a href='https://github.com/threelyK' target='_blank' rel="noreferrer noopener"><img src='https://img.icons8.com/?size=256&id=62856&format=png' width='20px' height='20px'/>
                Kyle Deladia
                </a>
                </h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sed consequuntur officiis voluptates eveniet debitis, quis aut aspernatur in fuga molestias consectetur voluptatum obcaecati minus eos perspiciatis fugit autem alias.
              </p>
            </div>
            <div>
              <p className='memberInfo contentRight'>
                <h6 className='nameRight'>
                <a className='nameRight' href='https://github.com/JiaJasonLiu' target='_blank' rel="noreferrer noopener"><img src='https://img.icons8.com/?size=256&id=62856&format=png' width='20px' height='20px'/>
                Jason Liu
                </a>
                </h6>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus illum repellat animi maiores? Autem asperiores ducimus veniam, corporis soluta dolor illum, repudiandae doloremque velit inventore nisi? Labore veniam cupiditate dicta.
              </p>
            </div>
            <div className='memberInfo contentLeft'>
              <p>
                <h6 className='nameLeft'>
                <a href='https://github.com/notdari' target='_blank' rel="noreferrer noopener"><img src='https://img.icons8.com/?size=256&id=62856&format=png' width='20px' height='20px'/>
                Dariush Tomlinson
                </a>
                </h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae minima consectetur, repudiandae, vitae assumenda ab minus accusantium quidem commodi rem, ducimus provident aperiam numquam blanditiis! Illo facilis neque quas.
              </p>
            </div> */}

            <p className='Disclaimer'>
              <b>Disclaimer:</b> This website is an educational tool to teach individuals about financial scams.
            </p>
          </div>
        </div>
    );
}

export default AboutBox;
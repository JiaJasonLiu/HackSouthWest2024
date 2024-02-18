import '../css/index.css';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UoE_logo from '../images/UoE_logo.png';
import UoB_logo from '../images/UoB_logo.gif';

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
            <div className='memberInfo contentLeft'>
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
            </div>
            <p className='Disclaimer'>
              <b>Disclaimer:</b> This website is an educational tool to teach individuals about financial scams.
            </p>
          </div>
        </div>
    );
}

export default AboutBox;
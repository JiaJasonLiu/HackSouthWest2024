// import '../css/index.css';
// import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
    return(
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
            <div className='text-center p-3'>
                &copy; {new Date().getFullYear()} Copyright:{' ASIANS ++ LTD'}
            </div>
        </MDBFooter>
    );
}

export default Footer;
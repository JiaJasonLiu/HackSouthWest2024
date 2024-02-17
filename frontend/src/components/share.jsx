import '../css/index.css';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

const shareUrl = 'localHost:3000';

function Share(){
    return(
        <div className =  'centered' style={{ color: '#000000', padding: '50px' }}>
            <h2 className = 'inputtitle'>Share to get 10% off your next Investment</h2>
            <EmailShareButton url = {shareUrl}>
            </EmailShareButton>
            <EmailIcon size = {40}/>
            <FacebookShareButton url = {shareUrl}>
            </FacebookShareButton>
            <FacebookIcon size = {40}/>
            <LinkedinShareButton url = {shareUrl}>
            </LinkedinShareButton>
            <LinkedinIcon size = {40}/>
            <TwitterShareButton url = {shareUrl}>
            </TwitterShareButton>
            <TwitterIcon size = {40}/>

        </div>
    );
}

export default Share;
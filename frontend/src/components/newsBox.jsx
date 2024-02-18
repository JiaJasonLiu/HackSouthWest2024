import '../css/index.css';
import '../css/home.css';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut venenatis tellus in metus vulputate eu scelerisque. Aliquam eleifend mi in nulla posuere sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Enim facilisis gravida neque convallis a cras semper auctor. Potenti nullam ac tortor vitae purus faucibus ornare. Ut faucibus pulvinar elementum integer enim neque volutpat. A pellentesque sit amet porttitor eget dolor. Ornare quam viverra orci sagittis eu. Aliquam eleifend mi in nulla posuere. Eu volutpat odio facilisis mauris sit amet massa vitae. Id nibh tortor id aliquet. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Sit amet justo donec enim diam vulputate ut pharetra. Et tortor at risus viverra adipiscing at in tellus integer. Molestie at elementum eu facilisis sed. Lectus quam id leo in vitae turpis massa sed. Arcu non sodales neque sodales ut etiam sit amet. Eu mi bibendum neque egestas congue quisque. Nisl pretium fusce id velit ut tortor pretium. Id ornare arcu odio ut sem nulla. Interdum consectetur libero id faucibus nisl. Vulputate ut pharetra sit amet aliquam id. Ut aliquam purus sit amet luctus. Nulla pharetra diam sit amet nisl suscipit adipiscing. Duis at consectetur lorem donec massa sapien faucibus et. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Maecenas accumsan lacus vel facilisis volutpat est velit. Sit amet commodo nulla facilisi. Amet facilisis magna etiam tempor. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Nec dui nunc mattis enim. Ridiculus mus mauris vitae ultricies. Tincidunt vitae semper quis lectus nulla. Nunc non blandit massa enim nec dui. Nunc consequat interdum varius sit amet mattis. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Faucibus pulvinar elementum integer enim neque volutpat. Auctor augue mauris augue neque gravida in fermentum. A scelerisque purus semper eget. In cursus turpis massa tincidunt dui ut ornare lectus.'

function NewsBox() {
    return(
        <div>
            <h1 className='heads'>
                BIDEN BUYS BITCOIN <Badge bg="danger">NEWS FLASH!!!</Badge>
            </h1>
            <Card className='title1' bg='danger'>
                <Card.Body>{lorem}</Card.Body>
            </Card>
            <h1 className='heads'>
                BITCOIN BUYS BIDEN <Badge bg="danger">NEWS FLASH!!!</Badge>
            </h1>
            <Card className='title1' bg='danger'>
                <Card.Body>{lorem}</Card.Body>
            </Card>
        </div>
    );
}

export default NewsBox;
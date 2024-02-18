
import Card from 'react-bootstrap/Card';


function ContentCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.profileImage} width='250px' height='300px'/>
      <Card.Body>
        <a href={props.link} rel='noreferrer noopener' target='_blank'><img src='https://img.icons8.com/?size=256&id=62856&format=png' width='50px' height='50px'/></a>
        <Card.Title>{props.member}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ContentCard;
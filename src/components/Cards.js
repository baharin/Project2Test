import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({image, title, content}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
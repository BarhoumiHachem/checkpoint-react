import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards() {
    return (

        <Container>
            <Row>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./photo-public.png" />
                    <Card.Body style={{ color: "red" }}>
                        <Card.Title>first card</Card.Title>
                        <Card.Text style={{ color: "blue" }}>
                            Some quick example text to build on the card title .
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./photo-public.png" />
                    <Card.Body style={{ color: "red" }}>
                        <Card.Title>Second card</Card.Title>
                        <Card.Text style={{ color: "blue" }}>
                            Some quick example text to build on the card title.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./photo-public.png" />
                    <Card.Body style={{ color: "red" }}>
                        <Card.Title>Third card</Card.Title>
                        <Card.Text style={{ color: "blue" }}>
                            Some quick example text to build on the card title.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
            </Row>
        </Container>
    );
}

export default Cards;
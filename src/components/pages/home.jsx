import { Card, Container, Row, Col , Button } from 'react-bootstrap'

function Home() {
    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                        <h1>EXPRESS.JS + VUE.JS</h1>
                        <p class="lead">HydraaaXD stay lern.....</p>
                        <Button href="https://github.com/HydraaaXD" target="_blank" variant="primary" size="lg">Gthb</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
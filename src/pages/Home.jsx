import { Card, Container, Row, Col , Button } from 'react-bootstrap'

function Home() {
    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                        <h1>EXPRESS.JS + REACT.JS</h1>
                        <p class="lead"><strong>rozannouval</strong> Still Learning</p>
                        <Button href="https://github.com/rozannouval" target="_blank" variant="primary" size="lg">Github</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
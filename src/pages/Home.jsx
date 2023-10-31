import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react';

function Home() {
    const [warna1, setWarna1] = useState("Berhenti");
    const [ukuran, setUkuran] = useState("h1");

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                            <h1>EXPRESS.JS + REACT.JS</h1>
                            <p class="lead"><strong>rozannouval </strong> Still Learning</p>
                            <Button href="https://github.com/rozannouval" target="_blank" variant="primary" size="lg">Github</Button>
                            <br />
                            <br />
                            <h1>{warna1}</h1>
                            <div className='hover-overlay'>
                                <Button style={{ backgroundColor: "red", textAlign: "center", padding: "20px 20px" }} onClick={() => setWarna1("Berhenti")} size="md"></Button>

                                <Button style={{ backgroundColor: "#FFFF00", textAlign: "center", padding: "20px 20px" }} onClick={() => setWarna1("Hati-Hati")} size="md"></Button>

                                <Button style={{ backgroundColor: "#7CFC00", textAlign: "center", padding: "20px 20px" }} onClick={() => setWarna1("Maju")} size="md"></Button>

                            </div>

                            <br />
                            <br />
                            <h1 className={`${ukuran}`}>{ukuran}</h1>
                            <div className='d-flex'>
                                <Button className='m-2' onClick={() => setUkuran("h1")} size="md">h1</Button>
                                <Button className='m-2' onClick={() => setUkuran("h2")} size="md">h2</Button>
                                <Button className='m-2' onClick={() => setUkuran("h3")} size="md">h3</Button>

                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
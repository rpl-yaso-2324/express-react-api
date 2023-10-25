import { Card, Container, Row, Col , Button } from 'react-bootstrap'
import { useState } from 'react';

function Home() {
    const [warna1, setWarna1] = useState("Merah");
    const [warna2, setWarna2] = useState("Kuning");
    const [warna3, setWarna3] = useState("Hijau");

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
                        <div style={{backgroundColor: "red", textAlign: "center", padding: "20px 0px", color: "white"}}>
                        <h1>lampu {warna1}</h1>
                        <Button onClick={() => setWarna1("Berhenti")} size="md">ganti</Button>
                        </div>
                        <div style={{backgroundColor: "#FFFF00", textAlign: "center", padding: "20px 0px"}}>
                        <h1>lampu {warna2}</h1>
                        <Button onClick={() => setWarna2("Hati-Hati")} size="md">ganti</Button>
                        </div>
                        <div style={{backgroundColor: "#7CFC00", textAlign: "center", padding: "20px 0px"}}>
                        <h1>lampu {warna3}</h1>
                        <Button onClick={() => setWarna3("Maju")} size="md">ganti</Button>
                        </div>
                        
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
import { useState } from 'react';
import { Card, Container, Row, Col , Button } from 'react-bootstrap'

function Home() {
   //const [kondisi, setKondisi] = useState("Berhenti");
   //const [warna, setWarna] = useState("danger");
   const [ukuran, setukuran] = useState ("h1")
   

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                        <h1>EXPRESS.JS + VUE.JS</h1>
                        <p class="lead">Tutorial FullStack Express.js dan React.js oleh <strong>SantriKoding.com</strong></p>
                        <Button href="http://santrikoding.com" target="_blank" variant="primary" size="lg">SELENGKAPNYA</Button>
                        </Card.Body>

                        <Button className="mt-2" onClick={() => setukuran("h1")}>h1</Button>
                        <Button className="mt-2" onClick={() => setukuran("h2")}>h2</Button>
                        <Button className="mt-2" onClick={() => setukuran("h3")}>h3</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;




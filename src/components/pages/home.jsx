import { Card, Container, Row, Col , Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';

function Home() {
    // const [lampu1, setlampu1] = useState("Merah");
    // const [lampu2, setlampu2] = useState("kuning");
    // const [lampu3, setlampu3] = useState("hijau");
    // const [text, settext] = useState("h1");

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                        <h1>EXPRESS.JS + REACT.JS</h1>
                        <p class="lead">HydraaaXD stay lern.....</p>
                        <Button href="https://github.com/HydraaaXD" target="_blank" variant="primary" size="lg">Gthb</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <div style={{color : "red"}}>
            <h1>lampu {lampu1}</h1>
      <button type="button"  onClick={() => setlampu1("Berhenti!!")} >jalankan</button>
           </div>
           <div style={{color : "yellow"}}>
            <h1>lampu {lampu2}</h1>
      <button type="button"  onClick={() => setlampu2("Hati-hati")} >jalankan</button>
           </div>
           <div style={{color : "green"}}>
            <h1>lampu {lampu3}</h1>
      <button type="button"  onClick={() => setlampu3("Maju")} >jalankan</button>
           </div>
           <br />
           <div>
            <h1>{text} h1</h1>
      <button type="button"  onClick={() => settext("h1")} >jalankan</button>
      <button type="button"  onClick={() => settext("h2")} >jalankan</button>
      <button type="button"  onClick={() => settext("h3")} >jalankan</button>
           </div> */}
        </Container>
    );
}

export default Home;
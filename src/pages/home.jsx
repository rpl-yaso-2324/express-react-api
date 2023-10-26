import { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'

function Home() {
    const [warna, setWarna] = useState('dark');
    const [Text, setText] = useState('IRENG');
    const [ukuran, setUkuran] = useState('fs-5');

    const gantiWarna = (className) => {
        setWarna(className);
    }

    return (
        <>
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                            <h1>EXPRESS.JS + VUE.JS</h1>
                            <p class="lead">Tutorial FullStack Express.js dan React.js oleh <strong>SantriKoding.com</strong></p>
                            <Button href="https://steamcommunity.com/id/Harufa/" target="_blank" variant="secondary" size="lg">play</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h1>WARNA</h1>
            <Button type="button" variant="danger" className="m-1" onClick={() => {setText('tetap waspada'); gantiWarna('text-danger')}}>
                merah
            </Button>
            <Button type="button" variant="warning" className="m-1 text-white" onClick={() => {setText('hati hati!'); gantiWarna('text-warning')}}>
                kuning
            </Button>
            <Button type="button" variant="success" className="m-1" onClick={() => {setText('maju maju!'); gantiWarna('text-success')}}>
                hijau
            </Button>
            <h1 className={warna}>{Text}</h1>
        </Container>
        <hr></hr>
        <Container className="mt-3">
        <h1>UKURAN</h1>
            <Button type="button" variant="secondary" className="m-1" onClick={() => setUkuran('fs-5')}>
                kecil
            </Button>
            <Button type="button" variant="secondary" className="m-1" onClick={() => setUkuran('fs-3')}>
                sedang
            </Button>
            <Button type="button" variant="secondary" className="m-1" onClick={() => setUkuran('fs-1')}>
                besar
            </Button>
            <h1 className={ukuran}>{ukuran}</h1>
        </Container>
        </>
    );
}

export default Home;
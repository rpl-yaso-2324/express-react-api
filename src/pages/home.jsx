import { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'

function Home() {
    const [warna, setWarna] = useState('berhenti');
    const [ukuran, setUkuran] = useState('fs-5');

    return (
        <>
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm" style={{ background: 'linear-gradient(to right, rgba(13, 82, 242, 0.9), rgba(242, 13, 67, 0.9))' }} >
                        <Card.Body className="p-4">
                            <h1 className='text-white'>EXPRESS.JS + VUE.JS</h1>
                            <p className="lead text-white">Tutorial FullStack Express.js dan React.js oleh <strong>SantriKoding.com</strong></p>
                            <Button href="https://www.bing.com/ck/a?!&&p=80dcd2f8000b3db5JmltdHM9MTY5ODEwNTYwMCZpZ3VpZD0wZGIyODcxMS01YzQwLTZlYmMtMDY1NC05NDQ0NWQxMjZmNzYmaW5zaWQ9NTE5OQ&ptn=3&hsh=3&fclid=0db28711-5c40-6ebc-0654-94445d126f76&psq=crazy+games&u=a1aHR0cHM6Ly93d3cuY3JhenlnYW1lcy5jb20v&ntb=1" 
                            target="_blank" variant="warning" size="xl">play</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h1>WARNA</h1>
            <Button type="button" variant="danger" onClick={() => setWarna('berhenti')}>
                merah
            </Button>
            <Button type="button" variant="warning" onClick={() => setWarna('pelan-pelan')}>
                kuning
            </Button>
            <Button type="button" variant="success" onClick={() => setWarna('jalan')}>
                hijau
            </Button>
            <h1>{warna}</h1>
        </Container>
        <hr></hr>
        <Container className="mt-3">
        <h1>UKURAN</h1>
            <Button type="button" onClick={() => setUkuran('fs-6')}>
                kecil
            </Button>
            <Button type="button" variant="success" onClick={() => setUkuran('fs-3')}>
                sedang
            </Button>
            <Button type="button" onClick={() => setUkuran('fs-1')}>
                besar
            </Button>
            <h1 className={ukuran}>{ukuran}</h1>
        </Container>
        </>
    );
}

export default Home;
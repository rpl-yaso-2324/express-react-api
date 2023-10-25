import { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'

function Home() {
    const [warna, setWarna] = useState('berhenti');

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                            <h1>EXPRESS.JS + VUE.JS</h1>
                            <p class="lead">Tutorial FullStack Express.js dan React.js oleh <strong>SantriKoding.com</strong></p>
                            <Button href="https://www.bing.com/ck/a?!&&p=80dcd2f8000b3db5JmltdHM9MTY5ODEwNTYwMCZpZ3VpZD0wZGIyODcxMS01YzQwLTZlYmMtMDY1NC05NDQ0NWQxMjZmNzYmaW5zaWQ9NTE5OQ&ptn=3&hsh=3&fclid=0db28711-5c40-6ebc-0654-94445d126f76&psq=crazy+games&u=a1aHR0cHM6Ly93d3cuY3JhenlnYW1lcy5jb20v&ntb=1" target="_blank" variant="danger" size="lg">play</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <button type="button"  onClick={() => setWarna('berhenti')}>
                merah
            </button>
            <button type="button" onClick={() => setWarna('pelan-pelan')}>
                kuning
            </button>
            <button type="button" onClick={() => setWarna('jalan')}>
                hijau
            </button>
            <h1>{warna}</h1>
        </Container>
    );
}

export default Home;
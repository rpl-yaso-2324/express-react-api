//import component Bootstrap React 
import { Card, Container, Row, Col } from 'react-bootstrap';

import React, { useState } from 'react';

function IndexPost() {
	const [ukuran, setUkuran] = useState('h1');

	const UkuranH1 = () => {
		setUkuran('h1');
	};
	
	const UkuranH2 = () => {
		setUkuran('h2');
	};
	
	const UkuranH3 = () => {
		setUkuran('h3');
	};
    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className={`${ukuran}`}>
                            HALAMAN INDEX POST
                        </Card.Body>
    <div>
      {Element === 'h1' && <h1>Ini Ukuran H1</h1>}
      {Element === 'h2' && <h2>Ini Ukuran H2</h2>}
      {Element === 'h3' && <h3>Ini Ukuran H3</h3>}
      <button onClick={()=>UkuranH1()}>H1</button>
      <button onClick={()=>UkuranH2()}>H2</button>
      <button onClick={()=>UkuranH3()}>H3</button>
    </div>


                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default IndexPost;
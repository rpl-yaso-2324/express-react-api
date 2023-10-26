//import component Bootstrap React
import { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function Home() {
    const [warna, setWarna] = useState('setop');
	const [ukuran, setUkuran] = useState('fs-5');


	return (
		<>
		<Container className="mt-3">
			<Row>
				<Col md="{12}">
					<Card className="border-0 rounded shadow-sm">
						<Card.Body className="p-4">
							<h1>EXPRESS.JS + REACT.JS</h1>
							<p class="lead">
								Jika ingin memulai Trading silahkan pencet di bawah{" "}
								<strong>coindesk.com</strong>
							</p>
							<Button
								href="https://www.coindesk.com/price/bitcoin/"
								target="_blank"
								variant="dark"
								size="lg"
							>
								MULAI TRADING
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
            <Button type="button" className="m-2" variant="danger" onClick={() => setWarna('setop')}>
                Redzz
            </Button>
            <Button type="button" className="m-2" variant="warning" onClick={() => setWarna('kade')}>
                Yelowzz
            </Button>
            <Button type="button" className="m-2" variant="success" onClick={() => setWarna('soc')}>
                Greenzz
            </Button>
			<h1>{warna}</h1>
            </Container>
			<hr></hr>
			<Container className="mt-3">
			<h1>UKURAN</h1>
			<Button type="button" className="m-2" variant="secondary" onClick={() => setUkuran('fs-5')}>
                kecil
            </Button>
            <Button type="button" className="m-2"  variant="secondary" onClick={() => setUkuran('fs-3')}>
                agak besar
            </Button>
            <Button type="button" className="m-2"  variant="secondary" onClick={() => setUkuran('fs-1')}>
                BESARRRR
            </Button>
			<h1 className={ukuran}>{ukuran}</h1>
		</Container>
		</>
	);
}

export default Home;
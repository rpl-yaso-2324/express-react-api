import {useState} from "react" ;
import { Card, Container, Row, Col } from "react-bootstrap";

function IndexPost() {
    const [ukuran, setUkuran] = useState("h1")
	return (
		<Container className="mt-3">
			<Row md={6}>
				<Col md="{12}">
					<Card className="border-0 rounded shadow-sm">
						<Card.Body>
                            HALAMAN INDEX POST
                        </Card.Body>
                        <button className="btn btn-dark mt-2" onClick={() => setUkuran("h1")}>
                           <h1>h1</h1>
                        </button>
                        <button className="btn btn-dark mt-2" onClick={() => setUkuran("h2")}>
                           <h2>h2</h2>
                        </button>
                        <button className="btn btn-dark mt-2" onClick={() => setUkuran("h3")}>
                           <h3>h3</h3>
                        </button>
                        <h1>{ukuran}</h1>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default IndexPost;
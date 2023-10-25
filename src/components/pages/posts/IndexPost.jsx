//import component Bootstrap React
import { Card, Container, Row, Col } from "react-bootstrap";

//import axios
//import axios from 'axios';

function IndexPosts() {
//   const [warna1, setWarna1] = useState("Merah");
//   const [warna2, setWarna2] = useState("Kuning");
//   const [warna3, setWarna3] = useState("Hijau");

	return (
		<Container className="mt-3">
			<Row>
				<Col md="{12}">
					<Card className="border-0 rounded shadow-sm">
						<Card.Body>HALAMAN INDEX POST</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default IndexPosts;
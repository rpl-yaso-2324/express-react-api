import { Card, Container, Row, Col } from "react-bootstrap";
//import hook useState dan useEffect from react
import { useState, useEffect } from "react";

//import axios
import axios from "axios";

function IndexPost() {
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
	//define state
	const [postingan, setPostingan] = useState([]);

	//useEffect hook
	useEffect(() => {
		//panggil method "fetchData"
		fetchData();
	}, []);

	const fetchData = async () => {
		//fetching
		const response = await axios.get("http://localhost:3000/api/postingan");
		//get response data
		const dataPostingan = await response.data.postingan;

		//assign response data to state "posts"
		setPostingan(dataPostingan);

		console.log(postingan);
	};
	return <></>;
}

export default IndexPost;
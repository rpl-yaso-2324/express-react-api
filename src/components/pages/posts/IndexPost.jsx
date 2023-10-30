//import component Bootstrap React
import { Card, Container, Row, Col } from "react-bootstrap";
//import hook useState dan useEffect from react
import { useState, useEffect } from "react";

//import axios
import axios from 'axios';

function IndexPost() {
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

		// <Container className="mt-3">
		// 	<Row md={6}>
		// 		<Col md="{12}">
		// 			<Card className="border-0 rounded shadow-sm">
		// 				<Card.Body>
      //                       <h5>HALAMAN INDEX POST</h5>
      //                   </Card.Body>
      //                   <button className="btn btn-dark mt-2" onClick={() => setUkuran("h1")}>
      //                      <h1>h1</h1>
      //                   </button>
      //                   <button className="btn btn-dark mt-2" onClick={() => setUkuran("h2")}>
      //                      <h2>h2</h2>
      //                   </button>
      //                   <button className="btn btn-dark mt-2" onClick={() => setUkuran("h3")}>
      //                      <h3>h3</h3>
      //                   </button>
      //                   <h1>{ukuran}</h1>
		// 			</Card>
		// 		</Col>
		// 	</Row>
		// </Container>
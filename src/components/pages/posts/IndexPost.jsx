//import hook useState dan useEffect from react
import { useState, useEffect } from "react";

//import axios
import axios from "axios";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";

//import react router dom
import { Link } from "react-router-dom";

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
    const dataPostingan = await response.data.data;

    //assign response data to state "posts"
    setPostingan(dataPostingan);
  };
  console.log(postingan);

  return (
    <Container className="mt-3">
      <Row>
        <Col md="{12}">
          <Card className="border-0 rounded shadow-sm">
            <Card.Body>
              <Button
                as={Link}
                to="/posts/create"
                variant="success"
                className="mb-3"
              >
                TAMBAH POST
              </Button>
              <Table striped bordered hover className="mb-1">
                <thead>
                  <tr>
                    <th>NO.</th>
                    <th>TITLE</th>
                    <th>CONTENT</th>
                    <th>AKSI</th>
                  </tr>
                </thead>
                <tbody>
                  {postingan.map((post, index) => (
                    <tr key={post.id}>
                      <td>{index + 1}</td>
                      <td>{post.title}</td>
                      <td>{post.content}</td>
                      <td className="text-center"></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
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
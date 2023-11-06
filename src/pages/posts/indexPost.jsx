import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


function IndexPost() {
	const [posts, setPosts] = useState([]);

	console.log(posts);

	//useEffect hook
	useEffect(() => {
		//panggil method "fetchData"
		fetchData();
	}, []);

	const fetchData = async () => {
		//fetching
		const response = await axios.get("http://localhost:3000/posts");
		//get response data
		const dataPosts = await response.data.posts;

		//assign response data to state "posts"
		setPosts(dataPosts);

		

	};
	return (
		<Container className="mt-3">
			<Row>
				<Col md="{12}">
					<Card className="border-0 rounded shadow-sm">
						<Card.Body>
							<Button
								as={Link}
								to="/posts/create"
								variant="warning"
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
									{posts.map((post, index) => (
										<tr key={post.id}>
											<td>{index + 1}</td>
											<td>{post.tittle}</td>
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
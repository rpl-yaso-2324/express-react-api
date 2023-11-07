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

	const deletePost = async (id) => {

		//sending
		await axios.delete(`http://localhost:3000/posts/deletePostingan/${id}`);

		//panggil function "fetchData"
		fetchData();
	}

	return (
		<Container className="mt-3">
			<Row>
				<Col md="{12}">
					<Card className="border-0 rounded shadow-sm">
						<Card.Body>
							<Button
								as={Link}
								to="/posts/create"
								className="mb-3"
								style={{ background: 'linear-gradient(to right, rgba(255, 192, 203, 0.9), rgba(138, 43, 226, 0.9))' }}
							>
								TAMBAH POST
							</Button>
							<Table striped bordered hover className="mb-1">
								<thead>
									<tr>
										<th className="text-primary">NO.</th>
										<th  className="text-success">TITLE</th>
										<th className="text-warning">CONTENT</th>
										<th className="text-danger">ACTION</th>
									</tr>
								</thead>
								<tbody>
									{posts.map((post, index) => (
										<tr key={post.id}>
											<td>{index + 1}</td>
											<td>{post.tittle}</td>
											<td>{post.content}</td>
											<td className="text-center">
												<Button as={Link} to={`/posts/edit/${post.id}`} variant="primary" size="sm" className="me-2">MANIPULATE!</Button>
												<Button onClick={() => deletePost(post.id)} variant="danger" size="sm">BEGONE!</Button>
											</td>
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
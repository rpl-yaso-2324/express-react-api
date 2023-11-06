import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button, Table } from 'react-bootstrap';
import axios from 'axios';

function IndexPosts() {
     //define state
     const [posts, setPosts] = useState([]);

     //useEffect hook
     useEffect(() => {
 
         //panggil method "fetchData"
         fetchData();
 
     }, []);
 
     //function "fetchData"
     const fetchData = async () => {
         //fetching
         const response = await axios.get('http://localhost:2000/api/postingan');
         //get response data
         const data = await response.data.data;
 
         //assign response data to state "posts"
         setPosts(data);
     };

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                            <Button as={Link} to="/posts/create" variant="success" className="mb-3">TAMBAH POST</Button>
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
                                    { posts.map((post, index) => (
                                        <tr key={ post.id }>
                                            <td>{ index + 1 }</td>
                                            <td>{ post.title }</td>
                                            <td>{ post.content }</td>
                                            <td className="text-center">
                                            <Button as={Link} to={`/posts/edit/${post.id}`} variant="primary" size="sm" className="me-2">EDIT</Button>
                                            </td>
                                        </tr>
                                    )) }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


export default IndexPosts;
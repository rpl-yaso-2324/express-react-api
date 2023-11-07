//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';

//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from 'react-bootstrap';

//import axios
import axios from 'axios';

function IndexPost() {

    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');

    //define state
    const [postingan, setPostingan] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await axios.get('http://localhost:3000/posts');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setPostingan(data);
    };
    const deletePost = async (id) => {
        console.log('Delete Post yang ID:', id);
        const url = `http://localhost:3000/posts/deletePostingan/${id}`;
        console.log('URL:', url);
        try {
            await axios.delete(url);
            fectData();
        } catch (error) {
            console.error("Error deleting post:", error);
        }
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
                                    { postingan.map((post, index) => (
                                        <tr key={ post.id }>
                                            <td>{ index + 1 }</td>
                                            <td>{ post.title }</td>
                                            <td>{ post.content }</td>
                                            <td className="text-center"><Button as={Link} to={`/posts/edit/${post.id}`} variant="primary" size="sm" className="me-2">Edit</Button>
                                            <Button onClick={() => deletePost(post.id)} variant="danger" size="sm">Delete</Button>
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

export default IndexPost;
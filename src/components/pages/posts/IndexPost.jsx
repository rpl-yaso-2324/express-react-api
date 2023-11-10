//import 2 hook useState(untuk meyimpan data) dan useEffect( untuk mengatur efek samping dalam komponen fungsional) from react
import { useState, useEffect } from 'react';

//import react router dom, agar bisa membuat tautan link yang mengarahkan pada rute lain
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from 'react-bootstrap';

//import axios
import axios from 'axios';

function IndexPost() {

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
        const response = await axios.get('http://localhost:3000/api/postingan');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setPosts(data);
    }
    //function "deletePost"
const deletePost = async (id) => {

    //sending
    await axios.delete(`http://localhost:3000/api/postingan/delete/${id}`);

    //memanggil function "fetchData"
    fecthData();
}
console.log (posts);

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                            <Button as={Link} to="/posts/create" variant="success" className="mb-3">TAMBAH POSTINGAN</Button>
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
                                        <Button onClick={() => deletePost(post.id)} variant="danger" size="sm">DELETE</Button>
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
//untuk menginstall react di cmd "npm install create-react-app" dengan syarat harus ada create-react-app nya
//bisa juga dengan "npx create-react-app nama_folder"
// disini kita menggunakan "npm create vite@latest"
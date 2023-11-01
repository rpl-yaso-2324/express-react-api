import { useState } from 'react';

//import component Bootstrap React
import { Card, Container, Row, Col , Form, Button, Alert } from 'react-bootstrap';

//import axios
import axios from 'axios';

//import hook navigate dari react router dom
import { useNavigate } from "react-router-dom";

function createPost() {

   //state
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');

   //state validation
   const [validation, setValidation] = useState({});

   //navigate
   const navigate = useNavigate();

   //method "buatPostingan"
   const tambahPostingan = async (e) => {
       e.preventDefault();

       //send data to server
       await axios.post('http://localhost:3000/api/posts/tambahPostingan', {
           title: title,
           content: content
       })
       .then(() => {

           //redirect
           navigate.push('/api/posts');

       })
       .catch((error) => {

           //assign validation on state
           setValidation(error.response.data);
       })

   };

    return (
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                        
                        {
                                validation.errors &&
                                    <Alert variant="danger">
                                        <ul class="mt-0 mb-0">
                                            { validation.errors.map((error, index) => (
                                                <li key={index}>{ `${error.param} : ${error.msg}` }</li>
                                            )) }
                                        </ul>
                                    </Alert>
                            }

                            <Form onSubmit={ tambahPostingan }>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>TITLE</Form.Label>
                                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan Title" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Masukkan Content" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    SIMPAN
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default createPost;
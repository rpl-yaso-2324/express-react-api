/* bagian 1 (fhany) */

//import hook useState(menyimpan data) from react
import { useState } from "react";

//import component Bootstrap React
import { Card, Container, Row, Col, Form, Button, Alert} from "react-bootstrap";

//import axios agar bisa melakukan permintaan HTTP ke server
import axios from "axios";

//import hook navigate agar bisa melakukan navigasi dari react router dom
import { useNavigate } from "react-router-dom";

function CreatePost() {
  //state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //state validation
  const [validation, setValidation] = useState({});

  //navigate
  const navigate = useNavigate();

 /*  bagian 2 (nazwa) */

  //method "storePost"
  const storePost = async (event) => {
    event.preventDefault();

    console.log(title);
    console.log(content);

    //send data to server
    await axios
      .post("http://localhost:3000/api/postingan/tambahPostingan", { title: title, content: content })
      .then(() => {
        //redirect
        navigate("/posts");
      })
      .catch((error) => {
        //assign validation on state
        setValidation(error.response.data);
      });
  };

  return (
    /* bagian 3 (sancan) */
   <Container className="mt-3">{/*  untuk mengelompokan element dalam satu wadah, dan "classname= mt-3" itu adalah css bostrap dengan margin-top sebanyak 3 unit */}
     <Row> {/* row Ini adalah elemen komponen React Row yang digunakan untuk membuat baris dalam susunan elemen Bootstrap. */}
       <Col md="{12}"> {/* col itu untuk membuat kolom, md itu agar lebar pada layar sedang/12 */}
         <Card className="border-0 rounded shadow-sm"> {/* untuk membuat kartu dalam desain */}
           <Card.Body> {/* bagian dari kartu yang akan berisi konten utamanya */}
             {validation.errors && (
               <Alert variant="danger">
                 <ul class="mt-0 mb-0">
                   {validation.errors.map((error, index) => (
                     <li key={index}>{`${error.param} : ${error.msg}`}</li>
                   ))}
                 </ul>
               </Alert>
             )}

             {/* bagian 4 (zasxya) */}

             <Form onSubmit={storePost}> {/* untuk mengsubmit storePost yang akan di panggil */}
               <Form.Group className="mb-3" controlId="formBasicEmail"> {/* untuk membungkus label dan konten */}
                 <Form.Label>TITLE</Form.Label> {/* untuk menampilkan label title */}
                 <Form.Control type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Masukkan Title" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>CONTENT</Form.Label> {/* untuk menampilkan label content */}
                 <Form.Control as="textarea" rows={3} value={content} onChange={(event) => setContent(event.target.value)} placeholder="Masukkan Content" />
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

export default CreatePost;
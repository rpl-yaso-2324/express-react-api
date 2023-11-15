//import hook useState(menyimpan data) from react
import { useState } from "react";

//import component Bootstrap React
import { Card, Container, Row, Col, Form, Button, Alert} from "react-bootstrap";

//import axios agar bisa melakukan permintaan HTTP ke server
import axios from "axios";

//import hook navigate agar bisa melakukan navigasi/arah dari react router dom
import { useNavigate } from "react-router-dom";

//membuat function create post yang di dalam nya terdapat state
function CreatePost() {
  //state
  const [title, setTitle] = useState("");   /* karena type data yang akan digunakan itu string */
  const [content, setContent] = useState("");

  //state validation
  const [validation, setValidation] = useState({});  /* untuk tampilan error makanya objek */

  //navigate
  const navigate = useNavigate();

  //method "storePost" agar bisa di jalankan ketika form di submit
  const tambahPostingan = async (event) => {
    event.preventDefault(); /* agar form saat di submit tidak melakukan reload page */
    console.log(title);
    console.log(content);

    //send data to server
    await axios
      .post("http://localhost:3000/api/postingan/tambahPostingan", { title: title, content: content }/* mengirimkan 2 parameter data, dimana datanya di ambil dari state */)
      .then(() => {
        //jika proses data berhasil dilakukan, maka kita akan melakukan redirect ke dalam url
        navigate("/posts");
      })
      .catch((error) => {
        // jika gagal di insert, maka akan melakukan assign error ke dalam state validation
        setValidation(error.response.data);
      });
  };

  return (
   <Container className="mt-3">{/*  untuk mengelompokan element dalam satu wadah, dan "classname= mt-3" itu adalah css bostrap dengan margin-top sebanyak 3 unit */}
     <Row> {/* row Ini adalah elemen komponen React Row yang digunakan untuk membuat baris dalam susunan elemen Bootstrap. */}
       <Col md="{12}"> {/* col itu untuk membuat kolom, md itu agar lebar pada layar sedang/12 */}
         <Card className="border-0 rounded shadow-sm"> {/* untuk membuat kartu dalam desain */}
           <Card.Body> {/* bagian dari kartu yang akan berisi konten utamanya */}
           {/* pesan error dari state validation */}
             {validation.errors && (
               <Alert variant="danger">
                 <ul class="mt-0 mb-0">
                   {validation.errors.map((error, index) => (
                     <li key={index}>{`${error.param} : ${error.msg}`}</li>
                   ))}
                 </ul>
               </Alert>
             )}

             <Form onSubmit={tambahPostingan}> {/* untuk mengsubmit storePost yang akan di panggil */}
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
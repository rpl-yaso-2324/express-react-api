import { useState, useEffect } from 'react';
//import { Link } from "react-router-dom";
//import { Card, Container, Row, Col, Button, Table } from 'react-bootstrap';
import axios from 'axios';

function IndexPosts() {
    const [postingan, setPostingan] = useState([]);

    useEffect(() => {
       
        fetchData();

    }, []);

    const fetchData = async () => {

        const response = await axios.get("http://localhost:3000/api/postingan");

        const dataPostingan = await response.data.postingan;

        setPostingan(dataPostingan);

        console.log(postingan);
    };

    return <></>


}

export default IndexPosts;
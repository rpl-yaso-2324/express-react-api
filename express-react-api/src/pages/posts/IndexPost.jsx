//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';

//import react router dom
//import { Link } from "react-router-dom";

//import component Bootstrap React
//import { Card, Container, Row, Col, Button, Table } from 'react-bootstrap';

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
        const response = await axios.get('http://localhost:3000/api/posts');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setPosts(data);
    };

    return <></>
        
    
}

export default IndexPost;
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from 'react-bootstrap'

function IndexPost() {
    const [posts, setPosts] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fecthData();

    }, [prop, state]);

    //function "fetchData"
    const fecthData = async () => {
        //fetching
        const response = await axios.get('http://localhost:3000/api/posts');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setPosts(data);
        //function "fetchData"
        const fectData = async () => {
            //fetching
            const response = await axios.get('http://localhost:3000/api/posts');
            //get response data
            const data = await response.data.data;

            //assign response data to state "posts"
            setPosts(data);
        }
    }


    }

    export default IndexPost;
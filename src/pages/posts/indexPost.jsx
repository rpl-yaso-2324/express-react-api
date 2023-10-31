import { useState, useEffect } from 'react';
import axios from 'axios';

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
    return (
        <>
        </>
    );
    }

export default IndexPost;
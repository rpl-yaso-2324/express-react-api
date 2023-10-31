import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import IndexPost from "./components/pages/posts/IndexPost";
import CreatePost from "./components/pages/posts/CreatePost";
import EditPost from "./components/pages/posts/editPost";
import Layout from "./components/layout/Layout";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home/>} />
					<Route path="/posts" element={<IndexPost />} />
					<Route path="/posts/create" element={<CreatePost />} />
					<Route path="/posts/edit/:id" element={<EditPost />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
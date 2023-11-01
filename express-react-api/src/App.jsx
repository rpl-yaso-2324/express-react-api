import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import IndexPost from "./pages/posts/IndexPost";
import CreatePost from "./pages/posts/CreatePost";
import EditPost from "./pages/posts/EditPost";

function App() {
	return (
		<BrowserRouter>
			<Routes>
			<Route path="/" element={<Layout />}>
		        <Route index element={<Home/>}/>
				<Route path="/posts" element={<IndexPost />} />
				<Route path="/posts/create" element={<CreatePost />} />
				<Route path="/posts/edit/:id" element={<EditPost />} />
			</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/posts/Home";
import CreatePost from "./component/posts/pages/CreatePost";
import EditPost from "./component/posts/pages/EditPost";
import IndexPost from "./component/posts/pages/IndexPost";
import Layout from "./component/layouts/Layout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/posts" element={<IndexPost />} />
					<Route path="/posts/create" element={<CreatePost />} />
					<Route path="/posts/edit/:id" element={<EditPost />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import IndexPosts from "./components/pages/posts/indexPosts";
import CreatePosts from "./components/pages/posts/CreatePosts";
import EditPosts from "./components/pages/posts/EditPosts";
import Home from "./components/pages/home";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home/>} />
					<Route path="posts" element={<IndexPosts  />}/>
					<Route path="posts/Create" element={<CreatePosts />}/>
					<Route path="posts/Edit/:id" element={<EditPosts  />}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

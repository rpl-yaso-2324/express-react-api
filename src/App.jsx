import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/layout";
import Home from "./components/pages/Home";
import IndexPost from "./components/pages/posts/Indexpost";
import EditPost from "./components/pages/posts/Editpost";
import CreatePost from "./components/pages/posts/CreatePots";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
				    <Route index element={<Home/>} />
			        <Route path="/posts" element={<IndexPost />} />
				    <Route path="/posts/Create" element={< CreatePost/>}/>
					<Route path="/posts/Edit/:id" element={< EditPost/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
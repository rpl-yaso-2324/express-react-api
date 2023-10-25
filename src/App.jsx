import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/layout";
import Home from "./components/pages/home";
import IndexPosts from "./components/pages/posts/indexPost";
import CreatePosts from "./components/pages/posts/createPost";

function App() {

  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/posts" element={<IndexPosts />}></Route>
        <Route path="/posts/create" element={<CreatePosts />}></Route>
        <Route path="/posts/edit/:id" element={<editPost />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

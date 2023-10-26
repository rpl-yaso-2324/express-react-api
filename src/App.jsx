import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layouts/Layout";
import Home from "./component/pages//Home";
import IndexPost from "./component/pages/posts/IndexPost";
import EditPost from "./component/pages/posts/EditPost";
import CreatePost from "./component/pages/posts/CreatePost";

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
           <Route index element ={<Home />} />
           <Route path="/posts" element={<IndexPost />} />
           <Route path="/posts/create" element={<CreatePost/>} />
           <Route path="/posts/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

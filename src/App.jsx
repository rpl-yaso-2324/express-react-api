import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layouts/Layout";
import IndexPost from "./component/pages/posts/IndexPosts";
import EditPost from "./component/pages/posts/EditPosts";

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
           <Route index element ={<Home />} />
           <Route path="/posts" element={<IndexPosts />} />
           <Route path="/posts/create" element={<CreatePosts/>} />
           <Route path="/posts/edit/:id" element={<EditPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

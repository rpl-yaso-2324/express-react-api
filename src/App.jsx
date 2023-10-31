import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './component/layouts/Layout';
import Home from "./pages/Home";
import IndexPost from "./pages/posts/Indexpost";
import CreatePost from "./pages/posts/Createpost";
import EditPost from "./pages/posts/Editpost";

  function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element ={<Home/>} />
           <Route path="/posts" element={<IndexPost/>} />
          <Route  path="/posts/create" element={<CreatePost/>} />
          <Route  path="/posts/edit/:id" element={<EditPost/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
 }

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import IndexPost from "./components/pages/posts/IndexPost"
import EditPost from ".components/pages/posts/EditPost"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/posts"  element={<IndexPost/>} />
        <Route path="/posts/create" element={<CreatePost/>} />
        <Route path="/posts/edit/:id"  element={<EditPost/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

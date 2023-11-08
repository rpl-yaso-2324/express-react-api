import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/layout';
import Home from "./pages/home";
import IndexPost from './pages/posts/indexPost'
import CreatePost from './pages/posts/createPost'
import EditPost from './pages/posts/editPost'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/posts" element={<IndexPost />} />
            <Route path="/posts/edit/:id" element={<EditPost />} />
            <Route path="/posts/create" element={<CreatePost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
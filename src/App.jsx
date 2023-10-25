import Layout from './components/layout/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import IndexPost from './pages/posts/IndexPost';
import CreatePosts from './pages/posts/CreatePosts';
import EditPosts from './pages/posts/EditPosts';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='/posts' element={<IndexPost/>}/>
          <Route path='/posts/create' element={<CreatePosts/>}/>
          <Route path='/posts/edit/:id' element={<EditPosts/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

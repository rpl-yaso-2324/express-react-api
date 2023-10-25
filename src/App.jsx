import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/home";
import IndexPost from "./components/pages/posts/IndexPost";
import CreatePost from "./components/pages/posts/CreatePost";
import EditPost from "./components/pages/posts/EditPost";

function App () {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route index element={<Home />}/>
         <Route path="/posts" component={<IndexPost/>} />
         <Route path="/posts/create" component={<CreatePost/>} />
         <Route path="/posts/edit/:id" component={<EditPost/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
//react bootstrap itu komponen yg sudah ada tampilannya
//bootstrap itu framework css
//hook adalah salah satu fitur dari react
//useState itu suatu hook yang ada di react untuk menyimpan data
export default App;

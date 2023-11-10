import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
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
         <Route path="/posts" element={<IndexPost/>} />
         <Route path="/posts/create" element={<CreatePost/>} />
         <Route path="/posts/edit/:id" element={<EditPost/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
//react bootstrap itu komponen yg sudah ada tampilan nya
//bootstrap itu framework css
//hook adalah salah satu fitur dari react
//useState itu suatu hook yang ada di react untuk menyimpan data
//use history supaya bisa kembali kehalaman sebelumnya
//axios adalah pilihan yang digunakan dalam React untuk melakukan permintaan HTTP
//function itu kode blok yang dilakukan untuk memanggil tugas
export default App;

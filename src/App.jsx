import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import IndexPosts from "./components/pages/posts/indexPosts";
import CreatePosts from "./components/pages/posts/createPosts";
import EditPosts from "./components/pages/posts/editPosts";
function App () {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route index element={<Home />}/>
         <Route exact path="/posts" component={IndexPosts} />
         <Route exact path="/posts/create" component={CreatePosts} />
         <Route exact path="/posts/edit/:id" component={EditPosts} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import Header from "./header";
import { Outlet } from "react-router-dom";
import Home from "../pages/home";
function Layout({children}){
    return(
        <>
        <Header />
        { children }
      <Home />
        <Outlet />
        </>
    );
}

export default Layout;
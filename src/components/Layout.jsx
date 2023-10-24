import Header from "./Header";
import {Outlet} from "react-router-dom";


function Layout ({childern}) {
    return (
        <>
        <Header/>
        {childern}
        <Outlet/>
        </>
    )
}

export default Layout;
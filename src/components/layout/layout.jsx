
import Header from "./header";
import { Outlet } from 'react-router-dom'

function Layout ({children}) {
    return (
        <>
        <Header/>
        {children}
        <Outlet/>
        </>
    )
}

export default Layout
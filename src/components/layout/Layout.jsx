import Header from "./Header";

function Layout(params) {
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    );
}

export default Layout;
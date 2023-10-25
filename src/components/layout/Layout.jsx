import { Outlet } from "react-router-dom";
import Header from "./header";

function Layout({ children }) {
	return (
		<>
			<Header/>
			{children}
			<Outlet/>
		</>
	);
}

export default Layout;
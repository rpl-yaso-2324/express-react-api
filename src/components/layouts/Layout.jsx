import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Outlet />
		</>
	);
}

export default Layout;
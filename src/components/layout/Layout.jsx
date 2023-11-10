import { Outlet } from "react-router-dom"; 
import Header from "./header";

function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Outlet /> {/* outlet itu di import dari react-router-dom */}
		</>
	);
}

export default Layout;
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Page404 from "./pages/Page404";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Account from "./pages/dashboard/pages/Account";
import Custom from "./pages/dashboard/pages/Custom";
import "./index.css";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/signin" />} />
					<Route path="/*" element={<Navigate to="/not-found" />} />
					<Route path="/signup" element={<Register />} />
					<Route path="/signin" element={<Login />} />
					<Route path="/dashboard" element={<DashboardLayout />}>
						<Route index element={<Account />} />
						<Route
							path="/dashboard/custom-branding"
							element={<Custom />}
						/>
					</Route>
					<Route path="/not-found" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

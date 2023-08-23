import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Page404 from "./pages/Page404";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Account from "./pages/dashboard/pages/Account";
import Custom from "./pages/dashboard/pages/Custom";
import Privacy from "./pages/dashboard/pages/Privacy";
import Templates from "./pages/dashboard/pages/Templates";
import DefaultSet from "./pages/dashboard/pages/DefaultSet";
import RatingSet from "./pages/dashboard/pages/RatingSet";
import SingleSign from "./pages/dashboard/pages/SingleSign";
import Integration from "./pages/dashboard/pages/Integration";
import "./index.css";
import ApiKeys from "./pages/dashboard/pages/ApiKeys";
import WebHooks from "./pages/dashboard/pages/WebHooks";
import PlanUsage from "./pages/dashboard/pages/PlanUsage";
import Billing from "./pages/dashboard/pages/Billing";
import TeamMag from "./pages/dashboard/pages/TeamMag";
import Upgrade from "./pages/dashboard/pages/Upgrade";

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
							path="/dashboard/privacy"
							element={<Privacy />}
						/>
						<Route
							path="/dashboard/custom-branding"
							element={<Custom />}
						/>
						<Route
							path="/dashboard/template-email"
							element={<Templates />}
						/>
						<Route
							path="/dashboard/default-settings"
							element={<DefaultSet />}
						/>
						<Route
							path="/dashboard/rating-settings"
							element={<RatingSet />}
						/>
						<Route
							path="/dashboard/single-sign"
							element={<SingleSign />}
						/>
						<Route
							path="/dashboard/integration"
							element={<Integration />}
						/>
						<Route
							path="/dashboard/apikeys"
							element={<ApiKeys />}
						/>
						</Route>
						<Route
							path="/dashboard/webhooks"
							element={<WebHooks />}
						/>
						<Route
							path="/dashboard/planusage"
							element={<PlanUsage />}
						/>
						<Route
							path="/dashboard/billing"
							element={<Billing />}
						/>
						<Route
							path="/dashboard/teammag"
							element={<TeamMag />}
						/>
						<Route
							path="/dashboard/upgrade"
							element={<Upgrade />}
						/>
					<Route path="/not-found" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

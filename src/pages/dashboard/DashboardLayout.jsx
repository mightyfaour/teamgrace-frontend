import React from "react";
import Header from "../../components/Header";
import "./dashboard.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const DashboardLayout = () => {
	return (
		<div className="dashboard">
			<Header />
			<div className="main-layout">
				<div className="left">
					<Sidebar />
				</div>
				<div className="right">{<Outlet />}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;

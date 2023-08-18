import React from "react";
import { Link } from "react-router-dom";
import "./reusables.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<h1>Sidebar</h1>
			<Link to="/dashboard">Account</Link>
			<Link to="/dashboard/custom-branding">Custom Branding</Link>
		</div>
	);
};

export default Sidebar;

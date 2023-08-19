import React from "react";
import { Link } from "react-router-dom";
import "./reusables.css";
import { BsPerson } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import Product from "../assets/icons/product.svg";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="side_link">
				<BsPerson className="icon" />
				<Link to="/dashboard">Account</Link>
			</div>
			<div className="side_link">
				<MdOutlinePrivacyTip className="icon" />
				<Link to="/dashboard/privacy">Privacy & GDPR</Link>
			</div>
			<div className="side_link">
				<MdOutlinePrivacyTip className="icon" />
				<Link to="/dashboard/custom-branding">Custom Branding</Link>
			</div>
			<div className="side_link">
				<MdOutlinePrivacyTip className="icon" />
				<Link to="/dashboard/template-email">Template email / SMS</Link>
			</div>
			<div className="side_link">
				<img src={Product} alt="" />
				<Link to="/dashboard/default-settings">Default Settings</Link>
			</div>
			<div className="side_link">
				<img src={Product} alt="" />
				<Link to="/dashboard/rating-settings">Rating Settings</Link>
			</div>
			<div className="side_link">
				<img src={Product} alt="" />
				<Link to="/dashboard/single-sign">Single Sign On</Link>
			</div>
			<hr />
			<div className="side_link">
				<img src={Product} alt="" />
				<Link to="/dashboard/integration">Integration</Link>
			</div>
		</div>
	);
};

export default Sidebar;

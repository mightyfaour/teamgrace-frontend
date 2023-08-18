import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import "../components/reusables.css";

const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<h1>
					Team<span>Grace</span>
				</h1>
			</div>
			<div className="search">
				<input
					type="text"
					placeholder="Search for positions and global candidates"
				/>
			</div>
			<div className="links">
				<a href="/">Dashboard</a>
				<a href="/">Help & Support</a>
				<a href="/">Help & Support</a>
			</div>
			<div className="profile">
				<AiOutlineBell />
				<div>|</div>
				{/* <img src="" alt="" /> */}
				<p>Simon Orumen</p>
			</div>
		</div>
	);
};

export default Header;

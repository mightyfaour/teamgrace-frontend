import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import profile from "../assets/profile.jpg";

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
				<BiSearch className="search_icon" />
			</div>
			<div className="links">
				<a href="/">Dashboard</a>
				<a href="/">Help & Support</a>
			</div>
			<div className="profile">
				<AiOutlineBell className="bell_icon" />
				<div>|</div>
				<img src={profile} alt="profile_image" />
				<p>Simon Orumen</p>
			</div>
		</div>
	);
};

export default Header;

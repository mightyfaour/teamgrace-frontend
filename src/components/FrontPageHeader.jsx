import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import profile from "../assets/profile.jpg";

import "../components/reusables.css";

const FrontPageHeader = () => {
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
				
				<a href="/">Help & Support</a>
			</div>
			
		</div>
	);
};

export default FrontPageHeader;

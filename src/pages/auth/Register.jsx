import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

const Register = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		alert("Registration successful");

		navigate("/signin");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h1 className="logo">
					Team<span>Grace</span>
				</h1>
				<h2>Register Account</h2>
				<div className="field-container">
					<div className="input-container">
						<label htmlFor="companyName">Company name</label>
						<input type="text" placeholder="Team grace" />
					</div>
					<div className="input-container">
						<label htmlFor="email">Email</label>
						<input type="text" placeholder="teamgrace@gmail.com" />
					</div>
				</div>
				<div className="field-container">
					<div className="input-container">
						<label htmlFor="name">Name</label>
						<input type="text" placeholder="Dozie Solomon" />
					</div>
					<div className="input-container">
						<label htmlFor="PreferredLanguage">
							Preferred Language
						</label>
						<select name="language" id="language">
							<option value="english">English</option>
							<option value="french">French</option>
							<option value="spanish">Spanish</option>
						</select>
						{/* <input type="text" placeholder="French" /> */}
					</div>
				</div>
				<h2>Password & Security</h2>
				<div className="field-container">
					<div className="input-container">
						<label htmlFor="password">Password</label>
						<input type="password" placeholder="***************" />
					</div>
					<div className="input-container">
						<label htmlFor="password">Confirm Password</label>
						<input type="password" placeholder="***************" />
					</div>
				</div>

				<button type="submit">Save</button>
				<p>
					Already registered? <Link to="/signin">Login</Link>
				</p>
			</form>
		</>
	);
};

export default Register;

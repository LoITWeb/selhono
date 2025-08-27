import React from "react";
import { Link } from "react-router-dom";
import Arrow_w from "/public/images/arrow-w.svg";
import "./Sub.css";
import "./SubResponsive.css";

const Sub = () => {
	return (
		<section className="sub">
			<div className="container">
				<div className="sub-content">
					<p className="sub-title">Wanna join the interno?</p>
					<p className="sub-text">It is a long established fact  will be distracted.</p>
					<Link className="btn sub-btn">
						Contact With Us
						<img src={Arrow_w} alt="Button" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Sub;    
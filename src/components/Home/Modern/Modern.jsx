import React from "react";
import { Link } from "react-router-dom";
import Phone from "/public/images/phone.svg";
import Arrow_w from "/public/images/arrow-w.svg";
import "./Modern.css";
import "./ModernResponsive.css";

const Modern = () => {
	return (
		<section className="modern">
			<div className="container">
				<div className="modern-content">
					<h2 className="modern-title">We create art for modern life</h2>
					<p className="modern-text">
						There are many variations of the passages of lorem Ipsum from available, majority.
					</p>
					<div className="modern-phone">
						<a className="link-phone" href="tel:+11234567890">
							<img src={Phone} alt="Phone" className="phone-img" />
						</a>
						<div className="call-block">
							<p className="call-num-text">012345678</p>
							<p className="call-text">Call Us Anytime</p>
						</div>
					</div>
					<Link className="btn modern-btn" to="#!">
						Get Free Estimate
						<img src={Arrow_w} alt="Button" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Modern;    
import React from "react";
import "./Hero.css";
import "./HeroResponsive.css";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div style={{ padding: '2rem', textAlign: 'center' }}>
					<h1>This is the Contact page</h1>
					<p>
						Currently, this page is under construction and does not contain any contact details yet.
						Typically, a Contact page provides essential information such as phone numbers, email addresses, physical location, and sometimes social media links,
						allowing visitors to easily get in touch with you or your organization.
					</p>
					<p>
						In the future, this page could include contact forms, customer support info, office hours, and other ways to connect.
					</p>
					<p>
						Thank you for your patience! Please check back later for updates.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;    
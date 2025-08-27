import React from "react";
import "./Hero.css";
import "./HeroResponsive.css";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div style={{ padding: '2rem', textAlign: 'center' }}>
					<h1>This is the Services page</h1>
					<p>
						Currently, this page is under construction and does not contain any content yet.
						Here you can expect to find detailed information about the various services offered,
						including descriptions, features, and how to access or request them.
					</p>
					<p>
						Services could range from professional support, consulting, maintenance, to customer assistance and more.
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
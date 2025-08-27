import React from "react";
import "./Hero.css";
import "./HeroResponsive.css";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div style={{ padding: '2rem', textAlign: 'center' }}>
					<h1>This is the Pages page</h1>
					<p>
						Currently, this page is under construction and does not contain any content yet.
						Here you can expect to find a collection of different pages or sections of the website.
					</p>
					<p>
						This could include links to various parts of the site, navigation options, or summaries of content.
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
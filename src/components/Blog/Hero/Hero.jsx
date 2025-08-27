import React from "react";
import "./Hero.css";
import "./HeroResponsive.css";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div style={{ padding: '2rem', textAlign: 'center' }}>
					<h1>This is the Blog page</h1>
					<p>
						Currently, this page is under construction and does not contain any content yet.
						A blog is typically a collection of posts or articles, often presented in reverse chronological order,
						where you can share news, stories, insights, or updates.
					</p>
					<p>
						In the future, this page could feature articles, tutorials, opinions, and other engaging content to keep visitors informed and inspired.
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
import React from "react";
import "./Hero.css";
import "./HeroResponsive.css";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div style={{ padding: '2rem', textAlign: 'center' }}>
					<h1>This is the Project page</h1>
					<p>
						Currently, this page is under construction and does not contain any content yet.
						Here you can expect to find detailed information about projects, including planning, management, progress tracking, and best practices.
					</p>
					<p>
						This section could cover project goals, timelines, team roles, and tools used to ensure successful project delivery.
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
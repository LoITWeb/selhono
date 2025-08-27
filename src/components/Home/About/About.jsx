import React from "react";
import About_1 from "./images/about-1.webp";
import About_2 from "./images/about-2.webp";
import About_3 from "./images/about-3.webp";
import "./About.css";
import "./AboutResponsive.css";

const About = () => {
	return (
		<section className="about">
			<div className="container">
				<div className="about-content">
					<p className="about-title">What the People Thinks About Us</p>
					<div className="about-grid">
						<div className="about-card">
							<div className="about-name">
								<img src={About_1} alt="Photo" />
								<div className="about-block">
									<p className="name-text">Natasha</p>
									<p className="city-text">Moscow, Russia</p>
								</div>
							</div>
							<p className="about-text">
								Lorem Ipsum is simply dummy
								text of the typesetting industry.
								Ipsum has been.
							</p>
						</div>
						<div className="about-card">
							<div className="about-name">
								<img src={About_2} alt="Photo" />
								<div className="about-block">
									<p className="name-text">Raymond Galario</p>
									<p className="city-text">UK, London</p>
								</div>
							</div>
							<p className="about-text">
								Lorem Ipsum is simply dummy
								text of the typesetting industry.
								Ipsum has been scrambled it
								to make a type book.
							</p>
						</div>
						<div className="about-card">
							<div className="about-name">
								<img src={About_3} alt="Photo" />
								<div className="about-block">
									<p className="name-text">Benny Roll</p>
									<p className="city-text">USA, New York</p>
								</div>
							</div>
							<p className="about-text">
								Lorem Ipsum is simply dummy
								text of the typesetting industry.
								Ipsum has been scrambled.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;    
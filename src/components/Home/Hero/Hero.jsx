import React from "react";
import { Link } from "react-router-dom";
import Arrow_w from "/public/images/arrow-w.svg";
import "./Hero.css";
import "./HeroResponsive.css";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero-top">
					<h1 className="hero-title">Let's make your home beautiful together</h1>
					<p className="hero-text">
						There are many variations of the passages of lorem Ipsum fromavailable, majority.
					</p>
					<Link className="btn hero-btn" to="#!">
						Get Started
						<img src={Arrow_w} alt="Button" />
					</Link>
				</div>
				<div className="hero-sub">
					<div className="hero-block">
						<p className="hero-block-title">Project Plan</p>
						<p className="hero-block-text">
							There are many variations of the passages of lorem Ipsum from
							available, majority.
						</p>
						<Link className="hero-block-btn" to="#!">
							Read More
							<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.4292 8.43536L15.1524 8.29851M10.0474 1.91132L16.5704 8.4343L9.91597 15.0887" />
							</svg>
						</Link>
					</div>
					<div className="hero-block">
						<p className="hero-block-title">Interior Work</p>
						<p className="hero-block-text">
							There are many variations of the passages of lorem Ipsum from
							available, majority.
						</p>
						<Link className="hero-block-btn" to="#!">
							Read More
							<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.4292 8.43536L15.1524 8.29851M10.0474 1.91132L16.5704 8.4343L9.91597 15.0887" />
							</svg>
						</Link>
					</div>
					<div className="hero-block">
						<p className="hero-block-title">Realization</p>
						<p className="hero-block-text">
							There are many variations of the passages of lorem Ipsum from
							available, majority.
						</p>
						<Link className="hero-block-btn" to="#!">
							Read More
							<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.4292 8.43536L15.1524 8.29851M10.0474 1.91132L16.5704 8.4343L9.91597 15.0887" />
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;    
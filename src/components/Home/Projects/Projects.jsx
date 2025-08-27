import React from "react";
import { Link } from "react-router-dom";
import Projects_1 from "./images/projects-1.webp";
import Projects_2 from "./images/projects-2.webp";
import Projects_3 from "./images/projects-3.webp";
import Projects_4 from "./images/projects-4.webp";
import Arrow_btn from "/public/images/arrow-btn.svg";
import "./Projects.css";
import "./ProjectsResponsive.css";

const Projects = () => {
	return (
		<section className="projects">
			<div className="container">
				<div className="projects-top">
					<h3 className="projects-title">Follow Our Projects</h3>
					<p className="projects-text">
						It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.
					</p>
				</div>
				<div className="gallery-grid">
					<div className="gallery-card">
						<img src={Projects_1} alt="Bedroom" />
						<div className="gallery-card-block">
							<div className="gallery-card-content">
								<p className="gallery-title">Modern bedroom</p>
								<p className="gallery-text">Decor / Artchitecture</p>
							</div>
							<Link className="gallery-btn" to="#!">
								<img src={Arrow_btn} alt="Button" />
							</Link>
						</div>
					</div>
					<div className="gallery-card">
						<img src={Projects_2} alt="Bedroom" />
						<div className="gallery-card-block">
							<div className="gallery-card-content">
								<p className="gallery-title">Modern bedroom</p>
								<p className="gallery-text">Decor / Artchitecture</p>
							</div>
							<Link className="gallery-btn" to="#!">
								<img src={Arrow_btn} alt="Button" />
							</Link>
						</div>
					</div>
					<div className="gallery-card">
						<img src={Projects_3} alt="Bedroom" />
						<div className="gallery-card-block">
							<div className="gallery-card-content">
								<p className="gallery-title">Modern bedroom</p>
								<p className="gallery-text">Decor / Artchitecture</p>
							</div>
							<Link className="gallery-btn" to="#!">
								<img src={Arrow_btn} alt="Button" />
							</Link>
						</div>
					</div>
					<div className="gallery-card">
						<img src={Projects_4} alt="Bedroom" />
						<div className="gallery-card-block">
							<div className="gallery-card-content">
								<p className="gallery-title">Modern bedroom</p>
								<p className="gallery-text">Decor / Artchitecture</p>
							</div>
							<Link className="gallery-btn" to="#!">
								<img src={Arrow_btn} alt="Button" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;    
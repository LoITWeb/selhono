import React from "react";
import { Link } from "react-router-dom";
import work_service_1 from "./images/work-services-1.webp";
import work_service_2 from "./images/work-services-2.webp";
import work_service_3 from "./images/work-services-3.webp";
import work_service_4 from "./images/work-services-4.webp";
import "./Work.css";
import "./WorkResponsive.css";

const Work = () => {
	return (
		<section className="work">
			<div className="container">
				<h1 className="work-title">How We Work</h1>
				<p className="work-text">
					It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</p>
				<div className="working">
					<div className="work-block">
						<img src={work_service_1} alt="Work photo" />
						<div className="work-content">
							<p className="work-content-num num-right">01</p>
							<div className="work-content-block">
								<p className="work-content-title">Concept & Details</p>
								<p className="work-content-text">
									It is a long established fact  will be distracted.
									Lorem Ipsum is simply dummy from text of the
									and typesetting indufstry.
								</p>
							</div>
						</div>
					</div>
					<div className="work-block">
						<div className="work-content">
							<p className="work-content-num">02</p>
							<div className="work-content-block">
								<p className="work-content-title">Idea for Work</p>
								<p className="work-content-text">
									It is a long established fact  will be distracted.
									Lorem Ipsum is simply dummy from text of the
									and typesetting indufstry.
								</p>
							</div>
						</div>
						<img src={work_service_2} alt="Work photo" />
					</div>
					<div className="work-block">
						<img src={work_service_3} alt="Work photo" />
						<div className="work-content">
							<p className="work-content-num num-right">03</p>
							<div className="work-content-block">
								<p className="work-content-title">Design</p>
								<p className="work-content-text">
									It is a long established fact  will be distracted.
									Lorem Ipsum is simply dummy from text of the
									and typesetting indufstry.
								</p>
							</div>
						</div>
					</div>
					<div className="work-block">
						<div className="work-content">
							<p className="work-content-num">04</p>
							<div className="work-content-block">
								<p className="work-content-title">Perfection</p>
								<p className="work-content-text">
									It is a long established fact  will be distracted.
									Lorem Ipsum is simply dummy from text of the
									and typesetting indufstry.
								</p>
							</div>
						</div>
						<img src={work_service_4} alt="Work photo" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;    
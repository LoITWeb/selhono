import React from "react";
import { Link } from "react-router-dom";
import News_1 from "./images/news-1.webp";
import News_2 from "./images/news-2.webp";
import News_3 from "./images/news-3.webp";
import Arrow_btn_small from "/public/images/arrow-btn-small.svg";
import "./News.css";
import "./NewsResponsive.css";

const News = () => {
	return (
		<section className="news">
			<div className="container">
				<div className="news-content">
					<h3 className="news-top-title">Articles & News</h3>
					<p className="news-text">
						It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
					</p>
				</div>
				<div className="news-grid">
					<div className="news-card">
						<img src={News_1} alt="News" className="news-img" />
						<div className="design">
							<p>Kitchan Design</p>
						</div>
						<p className="news-title">Let’s Get Solution For Building Construction <br />Work</p>
						<div className="news-card-data">
							<p className="news-data">26 December,2022</p>
							<Link className="news-btn" to="#!">
								<img src={Arrow_btn_small} alt="Button" className="news-btn-img" />
							</Link>
						</div>
					</div>
					<div className="news-card">
						<img src={News_2} alt="News" className="news-img" />
						<div className="design">
							<p>Living Design</p>
						</div>
						<p className="news-title">Low Cost Latest Invented Interior Designing <br />Ideas.</p>
						<div className="news-card-data">
							<p className="news-data">22 November,2023</p>
							<Link className="news-btn" to="#!">
								<img src={Arrow_btn_small} alt="Button" className="news-btn-img" />
							</Link>
						</div>
					</div>
					<div className="news-card">
						<img src={News_3} alt="News" className="news-img" />
						<div className="design">
							<p>Interior Design</p>
						</div>
						<p className="news-title">Best For Any Office & Business Interior <br />Solution</p>
						<div className="news-card-data">
							<p className="news-data">4 December,2023</p>
							<Link className="news-btn" to="#!">
								<img src={Arrow_btn_small} alt="Button" className="news-btn-img" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default News;    
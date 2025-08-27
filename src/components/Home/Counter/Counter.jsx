import React from "react";
import "./Counter.css";
import "./CounterResponsive.css";

const Counter = () => {
	return (
		<section className="counter">
			<div className="container">
				<div className="counter-content">
					<div className="counter-block">
						<p className="counter-num">12</p>
						<p className="counter-text">Years Of Experiance</p>
					</div>
					<div className="counter-line"></div>
					<div className="counter-block">
						<p className="counter-num">1074</p>
						<p className="counter-text">Success Project</p>
					</div>
					<div className="counter-line line"></div>
					<div className="counter-block">
						<p className="counter-num">98</p>
						<p className="counter-text">Active Project</p>
					</div>
					<div className="counter-line"></div>
					<div className="counter-block">
						<p className="counter-num">583</p>
						<p className="counter-text">Happy CUstomers</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Counter;    
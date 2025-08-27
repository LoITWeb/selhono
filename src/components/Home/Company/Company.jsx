import React from "react";
import Company_1 from "./images/company-1.svg";
import Company_2 from "./images/company-2.svg";
import Company_3 from "./images/company-3.svg";
import Company_4 from "./images/company-4.svg";
import "./Company.css";
import "./CompanyResponsive.css";

const Company = () => {
	const images = [Company_1, Company_2, Company_3, Company_4];

	return (
		<section className="company">
			<div className="container">
				<div className="company-block">
					{/* Первый набор */}
					{images.map((img, idx) => (
						<img key={`first-${idx}`} src={img} alt="Photo" />
					))}
					{/* Второй набор (дубликат) */}
					{images.map((img, idx) => (
						<img key={`second-${idx}`} src={img} alt="Photo" />
					))}
					{/* Третий набор (дубликат) */}
					{images.map((img, idx) => (
						<img key={`third-${idx}`} src={img} alt="Photo" />
					))}
				</div>
			</div>
		</section>
	);
};

export default Company;    
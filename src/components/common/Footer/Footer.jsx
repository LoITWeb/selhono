import React from "react";
import { Link } from "react-router-dom";
import Logo from "/public/images/logo.png";
import Facebook from "../Footer/images/facebook.svg";
import Twitter from "../Footer/images/twitter.svg";
import Linkedin from "../Footer/images/linkedin.svg";
import Instagram from "../Footer/images/instagram.svg";
import "./Footer.css";
import "./FooterResponsive.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="socials">
						<Link className="link-logo" to="/">
							<img src={Logo} alt="Logo" className="footer-logo-img" />
						</Link>
						<p className="social-text">
							It is a long established fact that a reader will be distracted lookings.
						</p>
						<div className="social-block">
							<a href="#!" className="social-link">
								<img src={Facebook} alt="Facebook" className="social-img" />
							</a>
							<a href="#!" className="social-link">
								<img src={Twitter} alt="Twitter" className="social-img" />
							</a>
							<a href="#!" className="social-link">
								<img src={Linkedin} alt="Linkedin" className="social-img" />
							</a>
							<a href="#!" className="social-link">
								<img src={Instagram} alt="Instagram" className="social-img" />
							</a>
						</div>
					</div>
					<div className="footer-pages">
						<p className="pages-title">Pages</p>
						<Link className="link-pages" to="#!">About Us</Link>
						<Link className="link-pages" to="#!">Our Projects</Link>
						<Link className="link-pages" to="#!">Our Team</Link>
						<Link className="link-pages" to="#!">Contact Us</Link>
						<Link className="link-pages" to="#!">Services</Link>
					</div>
					<div className="footer-pages">
						<p className="pages-title">Services</p>
						<Link className="link-pages" to="#!">Kitchan</Link>
						<Link className="link-pages" to="#!">Living Area</Link>
						<Link className="link-pages" to="#!">Bathroom</Link>
						<Link className="link-pages" to="#!">Dinning Hall</Link>
						<Link className="link-pages" to="#!">Bedroom</Link>
					</div>
					<div className="footer-contacts">
						<p className="pages-title">Contacts</p>
						<p className="contact-text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
						<a className="link-pages" href="mailto:contact@selhono.com">contact@selhono.com</a>
						<a className="link-pages" href="tel:+11234567890">(123) 456 - 7890</a>
					</div>
				</div>
				<div className="copyright">Copyright © SELHONO </div>
			</div>
		</footer>
	);
};

export default Footer; 
import React from "react";
import { Link } from "react-router-dom";
import useMobileNav from "../../../hooks/useMobileNav";
import Logo from "/public/images/logo.png";
import Search from "/public/images/Search.svg";
import "./Header.css";
import "./HeaderResponsive.css";

const Header = () => {
	const { isOpen, toggleNav } = useMobileNav();

	const handleLinkClick = () => {
		toggleNav();
	};

	return (
		<header className="header">
			<div className="container">
				<div className="nav-menu">

					<Link className="link-logo" to="/">
						<img src={Logo} alt="Logo" className="logo-img" />
					</Link>

					<nav className="nav">
						<ul className="nav-list">
							<li className="nav-item">
								<Link className="nav-link" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Pages">Pages</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Services">Services</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Project">Project</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Blog">Blog</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Contact">Contact</Link>
							</li>
							<img src={Search} alt="Search" className="Search-img" />
						</ul>
					</nav>

					<div className="nav__icon">
						<button className="mobile-nav-btn" onClick={toggleNav}>
							<div className={`nav-icon ${isOpen ? 'nav-icon--active' : ''}`}></div>
						</button>
					</div>

				</div>
			</div>

			<div className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`}>
				<ul className="mobile-nav__list">
					<li><Link className="mobile-nav-link" to="/" onClick={handleLinkClick}>Home</Link></li>
					<li><Link className="mobile-nav-link" to="/Pages" onClick={handleLinkClick}>Pages</Link></li>
					<li><Link className="mobile-nav-link" to="/Services" onClick={handleLinkClick}>Services</Link></li>
					<li><Link className="mobile-nav-link" to="/Project" onClick={handleLinkClick}>Project</Link></li>
					<li><Link className="mobile-nav-link" to="/Blog" onClick={handleLinkClick}>Blog</Link></li>
					<li><Link className="mobile-nav-link" to="/Contact" onClick={handleLinkClick}>Contact</Link></li>
				</ul>
			</div>
		</header>
	);
};

export default Header; 
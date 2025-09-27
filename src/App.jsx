import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/common";
import { Home, Pages, Services, Project, Blog, Contact } from "./components";

const App = () => {
	return (
		<div className="wrapper">
			<Header />

			<main className="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Pages" element={<Pages />} />
					<Route path="/Services" element={<Services />} />
					<Route path="/Project" element={<Project />} />
					<Route path="/Blog" element={<Blog />} />
					<Route path="/Contact" element={<Contact />} />
				</Routes>
			</main>

			<Footer />
		</div>
	);
};

export default App;                  
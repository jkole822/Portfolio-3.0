import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import "./style.css";

const App = () => {
	const [headerState, setHeaderState] = useState("Home");

	return (
		<>
			<div className="content">
				<BrowserRouter>
					<Header
						handleHomeClick={() => setHeaderState("Home")}
						handlePortfolioClick={() => setHeaderState("Portfolio")}
						headerState={headerState}
					/>
					<Switch>
						<Route path="/" component={Landing} exact />
						<Route path="/portfolio" component={Portfolio} exact />
					</Switch>
				</BrowserRouter>
			</div>
			<Footer />
		</>
	);
};

export default App;

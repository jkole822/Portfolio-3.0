import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Landing from "./components/Landing.js";
import Portfolio from "./components/Portfolio.js";
import Footer from "./components/Footer.js";

const App = () => {
	return (
		<>
			<div className="content">
				<BrowserRouter>
					<Header />
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

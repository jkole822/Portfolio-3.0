import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./components/landing";
import Portfolio from "./components/portfolio";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Landing} exact />
				<Route path="/portfolio" component={Portfolio} exact />
			</Switch>
		</BrowserRouter>
	);
};

export default App;

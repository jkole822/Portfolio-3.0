import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";

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

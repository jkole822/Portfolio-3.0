import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/landing";

const App = () => {
	return (
		<Switch>
			<Route path="/" component={Landing} exact />
			<Route path="/portfolio" component={Portfolio} exact />
		</Switch>
	);
};

export default App;

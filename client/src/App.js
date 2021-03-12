import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Landing from "./components/Landing.js";
import Portfolio from "./components/Portfolio.js";
import Footer from "./components/Footer.js";

import { makeStyles } from "@material-ui/core/styles";

const App = () => {
	const useStyles = makeStyles({
		content: {
			minHeight: "100vh",
		},
	});

	const classes = useStyles();

	return (
		<>
			<div className={classes.content}>
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

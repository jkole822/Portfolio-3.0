import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import "./style.css";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Header({
	headerState,
	handleHomeClick,
	handlePortfolioClick,
}) {
	const classes = useStyles();

	const renderNavButton = () => {
		if (headerState === "Home") {
			return (
				<Link
					to="/portfolio"
					onClick={handlePortfolioClick}
					className="nav-links"
				>
					<Typography variant="button">Portfolio</Typography>
				</Link>
			);
		}

		return (
			<Link to="/" onClick={handleHomeClick} className="nav-links">
				<Typography variant="button">Home</Typography>
			</Link>
		);
	};
	return (
		<div className={classes.root}>
			<AppBar id="app-bar" position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Kole Gasior
					</Typography>

					{renderNavButton()}
				</Toolbar>
			</AppBar>
		</div>
	);
}

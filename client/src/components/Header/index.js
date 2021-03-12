import React from "react";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
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

export default function Header() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar id="app-bar" position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Kole Gasior
					</Typography>
					<Box mr={5}>
						<Link to="/portfolio" className="nav-links">
							<Typography variant="button">Portfolio</Typography>
						</Link>
					</Box>
					<Link to="/" className="nav-links">
						<Typography variant="button">Home</Typography>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
}

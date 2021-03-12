import React from "react";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

export default function Header() {
	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1,
		},
		title: {
			flexGrow: 1,
		},
		appBar: {
			backgroundColor: "rgb(65, 65, 65)",
		},
		navLinks: {
			color: "rgb(250, 250, 250)",
			textDecoration: "none",
		},
	}));
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Kole Gasior
					</Typography>
					<Box mr={5}>
						<NavLink to="/portfolio" className={classes.navLinks}>
							<Typography variant="button">Portfolio</Typography>
						</NavLink>
					</Box>
					<NavLink to="/" className={classes.navLinks}>
						<Typography variant="button">Home</Typography>
					</NavLink>
				</Toolbar>
			</AppBar>
		</div>
	);
}

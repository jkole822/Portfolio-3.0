/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, PhoneIphone, LinkedIn, Email } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

import "./style.css";

const Footer = () => {
	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1,
		},
	}));

	const classes = useStyles();

	return (
		<footer id="footer">
			<div className={classes.root}>
				<Grid container spacing={8} justify="center">
					<Grid item>
						<IconButton
							href="https://github.com/jkole822/"
							target="_blank"
							rel="noreferrer"
						>
							<GitHub className="connect" />
						</IconButton>
					</Grid>
					<Grid item>
						<IconButton
							href="https://www.linkedin.com/in/jkole822/"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedIn className="connect" />
						</IconButton>
					</Grid>
					<Grid item>
						<IconButton href="tel:3303016846" rel="noreferrer">
							<PhoneIphone className="connect" />
						</IconButton>
					</Grid>
					<Grid item>
						<IconButton href="mailto: jkole822@gmail.com" rel="noreferrer">
							<Email className="connect" />
						</IconButton>
					</Grid>
				</Grid>
			</div>
		</footer>
	);
};

export default Footer;

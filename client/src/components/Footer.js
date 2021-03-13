/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Grid from "@material-ui/core/Grid";
import { GitHub, PhoneIphone, LinkedIn, Email } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

import { makeStyles } from "@material-ui/core/styles";

const Footer = () => {
	const useStyles = makeStyles({
		root: {
			flexGrow: 1,
		},
		footer: {
			backgroundColor: "rgb(65, 65, 65)",
		},
		connect: {
			color: "rgb(250, 250, 250)",
			fontSize: "2.5rem",
			transition: "transform 500ms",
			"&:hover": {
				transform: "scale(1.3)",
				color: "#267AFE",
			},
		},
	});

	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<div className={classes.root}>
				<Grid container spacing={8} justify="center">
					<Grid item>
						<IconButton
							href="https://github.com/jkole822/"
							target="_blank"
							rel="noreferrer"
						>
							<GitHub className={classes.connect} />
						</IconButton>
					</Grid>
					<Grid item>
						<IconButton
							href="https://www.linkedin.com/in/jkole822/"
							target="_blank"
							rel="noreferrer"
						>
							<LinkedIn className={classes.connect} />
						</IconButton>
					</Grid>
					<Grid item>
						<IconButton href="tel:3303016846" rel="noreferrer">
							<PhoneIphone className={classes.connect} />
						</IconButton>
					</Grid>
					<Grid item>
						<IconButton href="mailto: jkole822@gmail.com" rel="noreferrer">
							<Email className={classes.connect} />
						</IconButton>
					</Grid>
				</Grid>
			</div>
		</footer>
	);
};

export default Footer;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import "./style.css";

const Skills = () => {
	const useStyles = makeStyles(theme => ({
		root: {
			flexGrow: 1,
		},
	}));

	const classes = useStyles();

	return (
		<>
			<div className={classes.root}>
				<Typography variant="h3" className="skills-header">
					Front End Skills
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>jQuery</li>
						</ul>
					</Grid>

					<Grid item xs={12} md={6}>
						<ul>
							<li>React</li>
							<li>React Hooks &amps; Context</li>
							<li>Redux</li>
							<li>Jest</li>
							<li>Enzyme</li>
						</ul>
					</Grid>
				</Grid>
			</div>

			<div className={classes.root}>
				<Typography variant="h3" className="skills-header">
					Back End Skills
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<ul>
							<li>Node</li>
							<li>Express</li>
							<li>Template Engines</li>
							<li>MongoDB</li>
							<li>Mongoose</li>
						</ul>
					</Grid>

					<Grid item xs={12} md={6}>
						<ul>
							<li>JavaScript</li>
							<li>Passport</li>
							<li>SQL</li>
							<li>mySQL</li>
							<li>Sequelize</li>
							<li>Jest</li>
						</ul>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default Skills;

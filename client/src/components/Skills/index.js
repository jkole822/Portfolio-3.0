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
						<Typography variant="body1">HTML</Typography>
						<Typography variant="body1">CSS</Typography>
						<Typography variant="body1">JavaScript</Typography>
						<Typography variant="body1">jQuery</Typography>
					</Grid>

					<Grid item xs={12} md={6}>
						<Typography variant="body1">React</Typography>
						<Typography variant="body1">React Hooks &amps; Context</Typography>
						<Typography variant="body1">Redux</Typography>
						<Typography variant="body1">Jest</Typography>
						<Typography variant="body1">Enzyme</Typography>
					</Grid>
				</Grid>
			</div>

			<div className={classes.root}>
				<Typography variant="h3" className="skills-header">
					Back End Skills
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<Typography variant="body1">Node</Typography>
						<Typography variant="body1">Express</Typography>
						<Typography variant="body1">Template Engines</Typography>
						<Typography variant="body1">MongoDB</Typography>
						<Typography variant="body1">Mongoose</Typography>
					</Grid>

					<Grid item xs={12} md={6}>
						<Typography variant="body1">JavaScript</Typography>
						<Typography variant="body1">Passport</Typography>
						<Typography variant="body1">SQL</Typography>
						<Typography variant="body1">mySQL</Typography>
						<Typography variant="body1">SequeTypographyze</Typography>
						<Typography variant="body1">Jest</Typography>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default Skills;

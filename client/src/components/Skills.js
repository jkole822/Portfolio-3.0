import React from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";

const Skills = () => {
	const useStyles = makeStyles({
		header: {
			fontFamily: "Lato, sans-serif",
			textTransform: "uppercase",
			letterSpacing: "0.05em",
			color: "rgb(115, 115, 115)",
			marginBottom: 15,
		},
	});

	const classes = useStyles();

	return (
		<>
			<Box mb={6}>
				<Typography variant="h3" className={classes.header} align="center">
					Front End Skills
				</Typography>
				<Grid container alignItems="center" justify="center">
					<Grid item xs={4}>
						<Typography align="center" variant="body1">
							HTML
						</Typography>
						<Typography align="center" variant="body1">
							CSS
						</Typography>
						<Typography align="center" variant="body1">
							JavaScript
						</Typography>
						<Typography align="center" variant="body1">
							jQuery
						</Typography>
					</Grid>

					<Grid item xs={4}>
						<Typography align="center" variant="body1">
							React
						</Typography>
						<Typography align="center" variant="body1">
							React Hooks & Context
						</Typography>
						<Typography align="center" variant="body1">
							Redux
						</Typography>
						<Typography align="center" variant="body1">
							Jest
						</Typography>
						<Typography align="center" variant="body1">
							Enzyme
						</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box mb={10}>
				<Typography variant="h3" className={classes.header} align="center">
					Back End Skills
				</Typography>
				<Grid container alignItems="center" justify="center">
					<Grid item xs={4}>
						<Typography align="center" variant="body1">
							Node
						</Typography>
						<Typography align="center" variant="body1">
							Express
						</Typography>
						<Typography align="center" variant="body1">
							Template Engines
						</Typography>
						<Typography align="center" variant="body1">
							MongoDB
						</Typography>
						<Typography align="center" variant="body1">
							Mongoose
						</Typography>
					</Grid>

					<Grid item xs={4}>
						<Typography align="center" variant="body1">
							JavaScript
						</Typography>
						<Typography align="center" variant="body1">
							Passport
						</Typography>
						<Typography align="center" variant="body1">
							SQL
						</Typography>
						<Typography align="center" variant="body1">
							mySQL
						</Typography>
						<Typography align="center" variant="body1">
							Sequelize
						</Typography>
						<Typography align="center" variant="body1">
							Jest
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Skills;

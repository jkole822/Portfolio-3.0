import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { GitHub } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

const Project = ({ project }) => {
	const useStyles = makeStyles({
		projectButton: {
			color: "rgb(250, 250, 250)",
			backgroundColor: "rgb(50, 50, 50)",
		},
	});

	const classes = useStyles();

	const renderTechnology = project => {
		const tech = project.technology.map(skill => {
			return (
				<Typography
					key={skill}
					variant="body2"
					color="textSecondary"
					component="p"
					align="center"
				>
					{skill}
				</Typography>
			);
		});
		return (
			<Box mt={2}>
				<Typography variant="body1" component="p" align="center">
					Technology
				</Typography>
				{tech}
			</Box>
		);
	};

	return (
		<Grid key={project.title} item xs={12} md={3}>
			<Card>
				<CardMedia
					component="img"
					src={`data:image/png;base64,${project.image.toString("base64")}`}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{project.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{project.description}
					</Typography>

					{project.technology.length ? renderTechnology(project) : null}

					<Box align="center" my={3}>
						<Box mb={2}>
							<Button
								className={classes.projectButton}
								href={project.github}
								target="_blank"
								rel="noreferrer"
								variant="contained"
								endIcon={<GitHub />}
							>
								Github
							</Button>
						</Box>

						<Button
							className={classes.projectButton}
							href={project.project_link}
							target="_blank"
							rel="noreferrer"
							variant="contained"
						>
							View Live Demo
						</Button>
					</Box>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Project;

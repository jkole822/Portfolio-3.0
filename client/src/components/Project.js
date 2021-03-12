import React from "react";
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
		cardContent: {
			color: "rgb(250, 250, 250)",
			backgroundColor: "rgb(65, 65, 65)",
		},
		header: {
			fontFamily: "Lato, sans-serif",
			fontSize: "1.25rem",
			fontWeight: "bold",
			letterSpacing: "0.05em",
			color: "#267AFE",
		},
		techHeader: {
			fontSize: "1rem",
			fontWeight: "bold",
			textTransform: "uppercase",
			letterSpacing: "0.05em",
			opacity: 0.7,
			marginBottom: 4,
		},
		projectButton: {
			color: "rgb(250, 250, 250)",
			backgroundColor: "#1A62D4",
		},
	});

	const classes = useStyles();

	const renderTechnology = project => {
		const tech = project.technology.map(skill => {
			return (
				<Typography key={skill} align="center">
					{skill}
				</Typography>
			);
		});
		return (
			<Box mt={2}>
				<Typography gutterBottom align="center" className={classes.techHeader}>
					Technology
				</Typography>
				{tech}
			</Box>
		);
	};

	return (
		<Grid item xs={12} md={3}>
			<Card>
				<CardMedia
					component="img"
					src={`data:image/png;base64,${project.image.toString("base64")}`}
				/>
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom align="center" className={classes.header}>
						{project.title}
					</Typography>
					<Typography align="center">{project.description}</Typography>

					{project.technology.length ? renderTechnology(project) : null}

					<Box align="center" my={3}>
						<Box mb={2}>
							<Button
								className={classes.projectButton}
								href={project.github}
								color="primary"
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
							color="primary"
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

import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

import Project from "./Project";

import { makeStyles } from "@material-ui/core/styles";

const Portfolio = () => {
	const useStyles = makeStyles({
		header: {
			fontFamily: "Lato, sans-serif",
		},
		spinner: {
			display: "flex",
			alignItems: "center",
			minHeight: "50vh",
		},
	});

	const classes = useStyles();

	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetchProjects();
	}, []);

	async function fetchProjects() {
		const fetchedProjects = await axios.get("/api/portfolio");
		setProjects(fetchedProjects.data);
	}

	const renderProjects = () => {
		if (projects.length) {
			return projects.map(project => {
				return <Project project={project} />;
			});
		}

		return (
			<Box className={classes.spinner}>
				<CircularProgress />
			</Box>
		);
	};

	return (
		<Container>
			<Box align="center" mt={10}>
				<Typography variant="h2" className={classes.header}>
					Portfolio
				</Typography>
			</Box>
			<Box my={10}>
				<Grid container justify="center" alignItems="flex-end" spacing={8}>
					{renderProjects()}
				</Grid>
			</Box>
		</Container>
	);
};

export default Portfolio;

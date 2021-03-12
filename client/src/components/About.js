import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { Description } from "@material-ui/icons";
import { Computer } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

const About = () => {
	const useStyles = makeStyles({
		header: {
			fontFamily: "Lato, sans-serif",
		},
		headerIcon: {
			fontSize: "3rem",
			color: "#267AFE",
		},
		profilePic: {
			width: 300,
			borderRadius: 8,
		},
		resumeButton: {
			backgroundColor: "#267AFE",
		},
		brandStatement: {
			textAlign: "justify",
			lineHeight: 2.5,
			maxWidth: "40em",
		},
	});

	const classes = useStyles();

	return (
		<Container>
			<Box my={5}>
				<Typography variant="h2" align="center" className={classes.header}>
					Full-Stack Web Developer <Computer className={classes.headerIcon} />
				</Typography>
			</Box>

			<Grid container spacing={5} alignItems="center">
				<Grid item xs={12} md={4} align="center">
					<img
						align="center"
						className={classes.profilePic}
						src="images/profile-pic.jpg"
						alt="Kole"
					/>
				</Grid>
				<Grid item xs={12} md={8} align="center">
					<Typography variant="body1" className={classes.brandStatement}>
						JavaScript developer leveraging a science background to develop
						quality and user-friendly web applications and websites. Since the
						beginning of 2020, I have acquired knowledge and experience with
						technologies such as JavaScript, jQuery, HTML, CSS, React, Redux,
						Node, Express, MongoDB, SQL, ORMs, Templating Engines, and Testing
						Frameworks. I am currently enrolled in a program for Web Development
						at the Ohio State University where I am expanding and polishing my
						skill set. Prior work and educational experience has been formative
						to my high attention-to-detail and degree of accuracy,
						organizational skills, and critical thinking ability which,
						alongside my proven history of strong work ethic and efficiently
						handling multiple responsibilities, serve to achieve challenging and
						complex objectives such as developing fully-functional, intuitive,
						and engaging web applications. I constantly strive to improve my
						expertise and am eager share my passion with an innovative team
						dedicated to develop and deliver quality applications.
					</Typography>
				</Grid>
			</Grid>

			<Box mt={2} mb={5} align="center">
				<Button
					size="large"
					className={classes.resumeButton}
					variant="contained"
					color="primary"
					href="./assets/resume.pdf"
					endIcon={<Description />}
				>
					<Typography variant="button">Resume</Typography>
				</Button>
			</Box>
		</Container>
	);
};

export default About;

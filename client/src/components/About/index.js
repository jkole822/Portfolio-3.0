import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Description } from "@material-ui/icons";
import "./style.css";

const About = () => {
	const useStyles = makeStyles(theme => ({
		button: {
			margin: theme.spacing(1),
		},
	}));
	const classes = useStyles();

	return (
		<>
			<Typography variant="h2" className="header">
				About
			</Typography>
			<img id="profile-pic" src="images/profile-pic.jpg" alt="Kole" />
			<Typography variant="body1" id="brand-statement">
				JavaScript developer leveraging a science background to develop quality
				and user-friendly web applications and websites. Since the beginning of
				2020, I have acquired knowledge and experience with technologies such as
				JavaScript, jQuery, HTML, CSS, React, Redux, Node, Express, MongoDB,
				SQL, ORMs, Templating Engines, and Testing Frameworks. I am currently
				enrolled in a program for Web Development at the Ohio State University
				where I am expanding and polishing my skill set. Prior work and
				educational experience has been formative to my high attention-to-detail
				and degree of accuracy, organizational skills, and critical thinking
				ability which, alongside my proven history of strong work ethic and
				efficiently handling multiple responsibilities, serve to achieve
				challenging and complex objectives such as developing fully-functional,
				intuitive, and engaging web applications. I constantly strive to improve
				my expertise and am eager share my passion with an innovative team
				dedicated to develop and deliver quality applications.
			</Typography>
			<Button
				variant="contained"
				color="primary"
				href="./assets/resume.pdf"
				className={classes.button}
				endIcon={<Description />}
			>
				<Typography variant="button">Resume</Typography>
			</Button>
		</>
	);
};

export default About;

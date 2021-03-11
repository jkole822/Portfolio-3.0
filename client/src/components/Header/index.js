import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Header({
	headerState,
	handleHomeClick,
	handlePortfolioClick,
}) {
	const classes = useStyles();

	const portfolioButtonClick = event => {
		event.preventDefault();

		handlePortfolioClick();
	};

	const homeButtonClick = event => {
		event.preventDefault();

		handleHomeClick();
	};

	const renderNavButton = () => {
		if (headerState === "Home") {
			return (
				<Button
					href="/portfolio"
					color="inherit"
					onClick={portfolioButtonClick}
				>
					Portfolio
				</Button>
			);
		}

		return (
			<Button href="/" color="inherit" onClick={homeButtonClick}>
				<Typography variant="button">Home</Typography>
			</Button>
		);
	};
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Kole Gasior
					</Typography>

					{renderNavButton()}
				</Toolbar>
			</AppBar>
		</div>
	);
}

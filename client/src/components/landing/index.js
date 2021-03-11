import React, { useRef, useEffect } from "react";
import Rellax from "rellax";

import "./style.css";

const Landing = () => {
	useEffect(() => {
		new Rellax(".animateOne", {
			speed: 1,
			center: false,
			wrapper: null,
			round: true,
			vertical: true,
			horizontal: false,
		});

		new Rellax(".animateFour", {
			speed: 4,
			center: false,
			wrapper: null,
			round: true,
			vertical: true,
			horizontal: false,
		});

		new Rellax(".animateFive", {
			speed: 5,
			center: false,
			wrapper: null,
			round: true,
			vertical: true,
			horizontal: false,
		});

		new Rellax(".animateNegOne", {
			speed: -1,
			center: false,
			wrapper: null,
			round: true,
			vertical: true,
			horizontal: false,
		});

		new Rellax(".animateNegThree", {
			speed: -3,
			center: false,
			wrapper: null,
			round: true,
			vertical: true,
			horizontal: false,
		});
	}, []);

	return (
		<div>
			<div id="background"></div>
			<i id="tear-one" className="fas fa-tint"></i>
			<i id="tear-two" className="fas fa-tint shapes animateNegOne"></i>
			<i id="tear-three" className="fas fa-tint shapes"></i>
			<i id="tear-four" className="fas fa-tint shapes animateNegThree"></i>
			<i id="tear-five" className="fas fa-tint shapes"></i>
			<i id="star-one" className="fas fa-star"></i>
			<i id="star-two" className="fas fa-star animateFour"></i>
			<i id="star-three" className="fas fa-star shapes animateOne"></i>
			<i id="star-four" className="fas fa-star shapes"></i>
			<i id="star-five" className="fas fa-star shapes animateFive"></i>
		</div>
	);
};

export default Landing;

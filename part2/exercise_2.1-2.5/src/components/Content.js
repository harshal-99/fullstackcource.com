import React from "react";

import Part    from "./Part";
import classes from "./Content.module.css";


const Content = ({parts}) => {
	let exercise = parts.reduce(
		(prev, curr) => prev + curr.exercises, 0
	)

	return (
		<div>
			{parts.map(part => <Part key={part.name} part={part}/>)}
			<div className={classes.bold}>total of {exercise} exercises
			</div>
		</div>
	)
}

export default Content
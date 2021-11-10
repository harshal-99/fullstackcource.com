import React from "react";

import Part    from "./Part";
import classes from "./Content.module.css";


const Content = ({parts}) => {
	let exercise = 0
	for (const part of parts) {
		exercise += part.exercises
	}
	return (
		<div>
			{parts.map(part => <Part part={part}/>)}
			<div className={classes.bold}>total of {exercise} exercises
			</div>
		</div>
	)
}

export default Content
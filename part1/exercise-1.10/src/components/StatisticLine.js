import React from "react";

const StatisticLine = (props) => {
	return (
		<div>{props.text + " " + props.value}</div>
	)
}

export default StatisticLine
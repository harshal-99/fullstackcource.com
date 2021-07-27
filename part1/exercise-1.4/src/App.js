import React from 'react';

const Header = (props) => {
	return <h2>{props.course}</h2>;
};

const Part = (props) => {
	return (
		<p>
			{props.part} {props.exercises}
		</p>
	);
};

const Content = (props) => {
	return (
		<div>
			<Part part={props.part1.name} exercises={props.part1.exercise} />
			<Part part={props.part2.name} exercises={props.part2.exercise} />
			<Part part={props.part3.name} exercises={props.part3.exercise} />
		</div>
	);
};

const Total = (props) => {
	return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>;
};

const App = () => {
	const course = 'Half Stack application development';
	const parts = [
		{
			name: 'Fundamentals of React',
			exercises: 10
		},
		{
			name: 'Using props to pass data',
			exercises: 7
		},
		{
			name: 'State of a component',
			exercises: 14
		}
	];

	return (
		<div>
			<Header course={course} />
			<Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
			<Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
		</div>
	);
};

export default App;

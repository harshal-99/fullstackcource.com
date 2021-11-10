import Header  from "./Header";
import Content from "./Content";


const Course = ({course}) => {
	return (
		<div key={course["id"]}>
			<Header name={course["name"]}/>
			<Content parts={course["parts"]}/>
		</div>
	)
}

export default Course
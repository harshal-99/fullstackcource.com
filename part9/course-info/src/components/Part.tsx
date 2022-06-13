import {CoursePart} from "../types";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({coursePart}: { coursePart: CoursePart }) => {
  let part
  switch (coursePart.type) {
    case "normal":
      part = <div key={coursePart.name}>
        <h4>{coursePart.name} {coursePart.exerciseCount}</h4>
        <p>{coursePart.description}</p>
      </div>
      break
    case "groupProject":
      if ("groupProjectCount" in coursePart) {
        part = <div key={coursePart.name}>
          <h4>{coursePart.name} {coursePart.exerciseCount}</h4>
          <p>Project exercises {coursePart.groupProjectCount}</p>
        </div>
      }
      break
    case "submission":
      if ("exerciseSubmissionLink" in coursePart) {
        part = <div key={coursePart.name}>
          <h4>{coursePart.name} {coursePart.exerciseCount}</h4>
          <p>{coursePart.description}</p>
          <p>submit to {coursePart.exerciseSubmissionLink}</p>
        </div>
      }
      break
    case "special":
      part = <div key={coursePart.name}>
        <h4>{coursePart.name} {coursePart.exerciseCount}</h4>
        <p>{coursePart.description}</p>
        <p>required skills {coursePart.requirements.map(req => <span key={req}>req</span>)}</p>
      </div>
      break
    default:
      return assertNever(coursePart)
  }

  return (
    <>
      {part}
    </>
  )
}

export default Part

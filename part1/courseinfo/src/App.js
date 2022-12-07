const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return(
      <p>{props.part.name} {props.part.excersises}</p>
  )
}

const Total = (props) => {
  return(
      <p>Number of excersises {props.parts.reduce((sum, part) => sum + part.excersises, 0)}</p>
  )
}

function App() {
  const course = {
    name: 'Half Stack Application Development',
    parts: [ { name: 'Fundamentals of React',
      excersises: 10 },
    { name: 'Using props to pass data',
      excersises: 7 },
    { name: 'State of the component',
      excersises: 14 } ]};
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
}

export default App;

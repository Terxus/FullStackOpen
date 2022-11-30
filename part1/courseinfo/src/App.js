const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} excersises={props.excercise1} />
      <Part name={props.part2} excersises={props.excercise2} />
      <Part name={props.part3} excersises={props.excercise3} />
    </div>
  )
}

const Part = (props) => {
  return(
      <p>{props.name} {props.excersises}</p>
  )
}

const Total = (props) => {
  return(
      <p>Number of excersises {props.total}</p>
  )
}

function App() {
  const course = 'Half Stack Application Development';
  const part1 = 'Fundamentals of React';
  const excercise1 = 10;
  const part2 = 'Using props to pass data';
  const excercise2 = 7;
  const part3 = 'State of the component';
  const excercise3 = 14;

  return (
    <div className="App">
      <Header course={course}/>
      <Content part1={part1} excercise1={excercise1}
               part2={part2} excercise2={excercise2}
               part3={part3} excercise3={excercise3} />
      <Total total={excercise1 + excercise2 + excercise3} />
    </div>
  );
}

export default App;

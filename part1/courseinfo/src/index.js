import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    return (
      <div>
        <Header title = {course} />
        <Content partName1 = {part1} exerciseNumber1 = {exercises1} 
                 partName2 = {part2} exerciseNumber2 = {exercises2}  
                 partName3 = {part3} exerciseNumber3 = {exercises3} />
        <Total exercises = {[exercises1,
                             exercises2,
                             exercises3]} />
      </div>
    )
  }

const Header = (props) => (
    <>
    <h1>{props.title}</h1>
    </>
)

const Content = (props) => (
    <div>
    <p>
       <Part partName = {props.partName1} exercises = {props.exerciseNumber1} />
       <Part partName = {props.partName2} exercises = {props.exerciseNumber2} />
       <Part partName = {props.partName3} exercises = {props.exerciseNumber3} /> 
    </p>
    </div>
)

const Total = (props) => {
    var total = 0;
    props.exercises.forEach(element => {
        total += element
    });

    return (
        <>
            <p>Number of exercises {total}</p>
        </>
    )
}

const Part = (props) => (
    <>
        {props.partName} {props.exercises}
        <br></br>
    </>
)

ReactDOM.render(<App />, document.getElementById('root'));


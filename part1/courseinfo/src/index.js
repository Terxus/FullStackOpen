import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
        ]
    }

    return (
        <div>
            <Header title={course.name} />
            <Content parts={course.parts} />
            <Total exercises={course.parts.map(part => part.exercises)} />
        </div>
    )
}

const Header = (props) => {
    console.log(props)
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <p>
                <Part part={props.parts[0]} />
                <Part part={props.parts[1]} />
                <Part part={props.parts[2]} />
            </p>
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    let total = 0
    props.exercises.forEach(element => total += element)

    return (
        <>
            <p>Number of exercises {total}</p>
        </>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <>
            {props.part.name} {props.part.exercises}
            <br></br>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

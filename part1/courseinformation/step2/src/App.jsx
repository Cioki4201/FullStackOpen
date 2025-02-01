const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {

  return (
    <>
      <p key={props.index}>{props.name} {props.exerciseCount}</p>
    </>
  )
}

const Content = (props) => {
  return ( // Iterating through the list of parts passed into the Component and displaying them 
    <>
      {props.parts.map((part, index) => (
          <Part key={index} name={part.name} exerciseCount={part.exerciseCount}/>
        ))}
    </>
  )
}

const Total = (props) => {
  let counter = 0;
  props.parts.forEach((part) => {
    counter += part.exerciseCount
  })
  
  return (
    <>
      <p><b>Total Exercise Count: {counter}</b></p>
    </>
  )
}

const App = () => {
  // Course Name
  const course = 'Half Stack application development'
  // List containing all parts, easy to add more courses
  const parts = [
    {name: "Fundamentals of React", exerciseCount: 10},
    {name: "Using props to pass data", exerciseCount: 7},
    {name: "State of a component", exerciseCount: 14}
    
  ]
    

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App

const Part = (props) => {
  console.log('compon0ent Part', props)
  return (
    <p>{props.name} {props.exercises} </p>
  )


}

const Content = ({parts}) => {
  console.log('component Content ', parts)
  return (
    <>
      {parts.map(part=> <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
    </>
  )
}

const Header = ({header}) => {
  console.log('component Header ',header)
  return (
    <div>
      <h1>
        {header}
      </h1>
    </div>
  )
}

const Course = ({course}) => {
  console.log('component Course ',course)
  return(
    <>
      <Header header = {course.name} />
      <Content parts = {course.parts} />
    </>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
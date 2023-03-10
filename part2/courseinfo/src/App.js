
const Total = ({parts}) => {
  console.log('component Total ',parts)
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  console.log('total in component Total', total)

  return (
    <b>
      total of {total} exercises
    </b>
  )

}

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
      <h2>
        {header}
      </h2>
    </div>
  )
}

const Course = ({course}) => {
  console.log('component Course ',course)
  return(
    <>
      <Header header = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
        <Course key={course.id} course={course} />)}
    </>
  )
}

export default App
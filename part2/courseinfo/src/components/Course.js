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

  
export default Course

const Person = (props) => {
    console.log('in component Person ', props)
    return (
        <>
            {props.name} {props.number} <br></br>
        </>
    )


}


const Persons = (props) => {
    console.log('in component Persons',props)
    return (
        <>
            {props.persons.map(person => 
                <Person key={person.id} name={person.name} number={person.number} />                
                ) }
        </>
    )
}

export default Persons
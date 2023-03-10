
const Person = (props) => {
    console.log('in component Person ', props)
    return (
        <>
            {props.name} <br></br>
        </>
    )


}


const Persons = (props) => {
    console.log('in component Persons',props)
    return (
        <>
            {props.persons.map(person => 
                <Person key={person.name} name={person.name} />                
                ) }
        </>
    )
}

export default Persons
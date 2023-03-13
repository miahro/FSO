const Person = (props) => {
    console.log('in component Person ', props)
    return (
        <>
            {props.name} {props.number} <br></br>
        </>
    )


}

export default Person 
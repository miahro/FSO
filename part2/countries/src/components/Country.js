const Country = ({name, capital, area, languages, flags}) => {
    console.log('in component Country ', name, area, capital, languages, flags)
    return (
        <>

            <h2>{name.common}</h2>
            <>capital &nbsp;</>
            {/* compromise here to get this work for South Africa or Macau */}
            {/* {capital.map(capital => <>{capital} &nbsp; <br></br></>)} */}
            {capital}<br></br>
            <>area {area}</>
            <h3>Languages</h3>
            <ul>
                {Object.entries(languages).map(([abb, lang]) => (
                <li>{lang}</li>))}

            </ul>


            <img src={flags.png} width="15%" alt="Flag"></img>
        </>
    )}


export default Country
const Country = ({name, capital, area, languages, flags, weatherdata}) => {
    console.log('in component Country ', name, area, capital, languages, flags)
    const icon_url ='https://openweathermap.org/img/wn/'+weatherdata.weather[0].icon +'@2x.png'
    console.log('icon URL', icon_url)
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
                <li key={abb}> {lang}</li>))}

            </ul>
            <img src={flags.png} width="15%" alt="Flag"></img>
            <h2>Weather in {capital}</h2>
            <p>temperature {weatherdata.main.temp} Celcius</p>
            <img src={icon_url}></img>
            <p> wind {weatherdata.wind.speed} m/s</p>
        </>
    )}


export default Country
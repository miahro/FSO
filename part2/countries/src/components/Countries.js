import Country from './Country'

const Countries = ({countrylist, setFilter}) => {
    if (countrylist.length > 10) {
        console.log("too many")
        return (
            <>Too many mathches, specify another filter </>
        )
    }
    else if (countrylist.length > 1) {
        console.log('in component Countries ', countrylist)
        return (
            <>
               {countrylist.map(country => <>{country.name.common} &nbsp;
               {<button onClick={()=>{setFilter(country.name.common)}}>show</button>}<br></br>
               </>)}
            </>
    )}
    else if (countrylist.length === 1) {
        console.log('in component Countries ', countrylist)
        console.log(countrylist[0].capital)
        console.log(countrylist[0].area)
        console.log(countrylist[0].languages)
        console.log(typeof(countrylist[0].languages))
        console.log(countrylist[0].flag)
          
        return (
            <>
                <Country 
                    name={countrylist[0].name}
                    capital={countrylist[0].capital}
                    area={countrylist[0].area}
                    languages={countrylist[0].languages}
                    flags={countrylist[0].flags}
                />
            </>
    )}
    else {
        return (
            <>No matches, specify another filter</>
        )
    }

}

export default Countries
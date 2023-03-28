import { useState, useEffect } from 'react'
import Filter_form from './components/Filter_form'
import Countries from './components/Countries'
import countryservice from './services/CountryServices'
import weatherservice from './services/WeatherServices'

const App = () => {
  const [newFilter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [weatherTarget, setWeatherTarget] = useState('London')
  const [weatherData, setWeatherData] = useState('')

  useEffect(() => {
    console.log('fetching country data')
   
    countryservice
      .getAll()
      .then(response => {
        setCountries(response.data)
        })
  }, [])
  console.log(countries)

  useEffect(() => {
    console.log('fetching weather dara')
    console.log('weather target', weatherTarget)
    weatherservice 
      .getTarget(weatherTarget)
      .then(response => {
        setWeatherData(response.data)
      }
        )
  }, [weatherTarget])

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)    
  }

  console.log('in Main filtered: ', countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()) ||country.name.official.toLowerCase().includes(newFilter.toLowerCase())))
  const countriesToShow =countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()))
  return (
    <div>
      <Filter_form 
        onFilterChange={handleFilter}
        filterValue={newFilter}
      />
    <>
      <Countries countrylist={countriesToShow}
        setFilter={setFilter}
        weatherdata={weatherData}
        setweathertarget={setWeatherTarget}
      />   
    </>
    
    </div>
   

  )
}
export default App;

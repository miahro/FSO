import { useState } from 'react'
import Persons from './components/Persons'
import Submit_form from './components/Submit_form'
import Filter_form from './components/Filter_form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('newName ', newName)
    const found = persons.some(person => person.name === newName);
    console.log("test if found: ", found)
    if (found) {alert(`${newName} is already added to phonebook`)}
    else {
      const personObject = {
        name : newName,
        number: newNumber,
        id : persons.length +1
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    console.log("handleNumberChange", newNumber)
    setNewNumber(event.target.value)
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  console.log('in Main filtered: ', persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter_form 
        onFilterChange={handleFilter}
        filterValue={newFilter}
      />
      <h3>add a new</h3>
      <Submit_form 
        name={newName}
        number={newNumber}
        newPerson={handlePersonChange}
        newNumber={handleNumberChange}
        onSubmit={addPerson}
      />

      <h3>Numbers</h3>
      <Persons persons={persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))} />
    </div>
  )
}

export default App
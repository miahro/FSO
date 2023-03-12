import { useState } from 'react'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div> name: <input name='name' value={newName} onChange={handlePersonChange} label='name' required/></div>
        <div> number: <input name='number' value={newNumber} onChange={handleNumberChange} label='number' /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App
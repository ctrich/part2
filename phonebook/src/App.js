import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleOnChange = (event) => {
    setNewName(event.target.value);
  }

  const addName = (event) => {
    event.preventDefault();

    if (checkIfNameExists()) {
      alert(`${newName} already exists!`);
      return;
    } 

    setPersons([...persons, {name: newName}]);
    setNewName('');
  }

  const checkIfNameExists = () => {
   return persons.some(person => person.name === newName);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
                  value={newName} 
                  onChange={handleOnChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return <Person 
                  key={person.name} 
                  person={person} 
                />
      })}
    </div>
  )
}

export default App
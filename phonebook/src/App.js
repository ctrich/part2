import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const addInfo = (event) => {
    event.preventDefault();

    if (checkIfNameExists()) {
      alert(`${newName} already exists!`);
      return;
    } 

    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewNumber('');
    setNewName('');
  }

  const checkIfNameExists = () => {
   return persons.some(person => person.name === newName);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addInfo}>
        <div>
          <div>
            name: <input 
                    value={newName} 
                    onChange={handleNameChange}
                  />
          </div>
         <div>
            Phone number: <input 
                            value={newNumber}
                            onChange={handleNumberChange}
                          />
         </div>
          
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
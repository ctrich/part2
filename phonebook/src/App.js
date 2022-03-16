import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const filterNamesChange = (event) => {
    setSearchTerm(event.target.value);
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

  const peopleToShow = !searchTerm ? 
                          persons : persons.filter(person => person.name.toLowerCase() === searchTerm.toLowerCase());

  return (
    <div>
      Filter results: 
      <input 
        value={searchTerm} 
        onChange={filterNamesChange}
      />
      <h2>Phonebook</h2>
      <form onSubmit={addInfo}>
        <div>
          <div>
            name: 
            <input 
              value={newName} 
              onChange={handleNameChange}
            />
          </div>
         <div>
            Phone number: 
            <input 
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
      {peopleToShow.map(person => {
        return <Person 
                  key={person.name} 
                  person={person} 
                />
      })}
    </div>
  )
}

export default App
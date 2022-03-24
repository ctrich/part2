import { useState, useEffect } from 'react';
import peopleServices from './services/people';
import Display from './components/Display';
import AddForm from './components/AddForm';
import Search from './components/Search';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=> {
    peopleServices
      .getAll()
      .then(people => {
        setPersons(people);
      })
  }, [])

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

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    peopleServices
      .create(newPerson)
      .then( returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewNumber('');
        setNewName('');
      });
  }
    

  const checkIfNameExists = () => {
   return persons.some(person => person.name === newName);
  }

  const peopleToShow = !searchTerm ? 
                          persons : persons.filter(person => person.name.toLowerCase() === searchTerm.toLowerCase());

  return (
    <div> 
      <Search 
        searchValue={searchTerm} 
        filterNamesChange={filterNamesChange}
      />
      <h2>Phonebook</h2>
      <AddForm 
        handleSubmit={addInfo} 
        nameValue={newName}
        handleNameChange={handleNameChange}
        phoneValue={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Display people={peopleToShow} />
    </div>
  )
}

export default App;
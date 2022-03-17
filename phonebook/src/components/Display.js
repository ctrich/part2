import Person from './Person';


const Display = ({ people }) => {

  
  return (
    <div>
      {people.map(person => {
        return <Person 
                  key={person.name} 
                  person={person} 
              />
      })}
    </div>
  );
}

export default Display;
import Person from './Person';


const Display = ({ people }) => {
  console.log(people)
  const loadedData = people.length === 0 ? '' 
                                         : <div>
                                              {people.map(person => {
                                                return <Person 
                                                          key={person.name} 
                                                          person={person} 
                                                        />
                                                })}
                                            </div>
                  
  return (
    loadedData
  );
}

export default Display;

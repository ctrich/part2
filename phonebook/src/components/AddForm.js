

const AddForm = ({ handleSubmit, nameValue, handleNameChange, phoneValue, handleNumberChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          name: 
          <input 
            value={nameValue} 
            onChange={handleNameChange}
          />
        </div>
        <div>
          Phone number: 
          <input 
            value={phoneValue}
            onChange={handleNumberChange}
          />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default AddForm;
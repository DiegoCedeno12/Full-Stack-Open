const PersonForm = ({onSavePerson, newName, onChangePerson, newPhone, onChangeNumber, id})=>{
  return (
    <form onSubmit={onSavePerson}>
        <div>
          name: <input value={newName} onChange={onChangePerson} />
        </div>
        <div>
          number: <input value={newPhone} onChange={onChangeNumber} />
        </div>
        <div>
          <button type="submit">{id !== '' ? 'update' : 'add'}</button>
        </div>
      </form>
  )
}

export default PersonForm
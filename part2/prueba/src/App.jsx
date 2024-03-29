import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import Persons from "./Component/Person"
import PersonForm from "./Component/PersonForm"
import Filter from "./Component/Filter"
import personServices from "./Component/Services/Persons.js"
import Notification from "./Component/Notification.jsx";

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [id, setId] = useState('')
  // Formularios controlados
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    personServices
      .getAll()
      .then(response =>
        setPersons(response)
      )
  }, [])

  const onSavePerson = (e) => {
    e.preventDefault()
    if (persons.filter(person => person.name === newName).length > 0 && id === "") {
      setErrorMessage(`${newName} ya existe este contacto`)
      return
    }

    if (newName === "" && newPhone === "") {
      setErrorMessage('El campo nombre es obligatorio')
      return
    }

    const newperson = {
      "name": newName,
      "number": newPhone,
      "id": id !== "" ? id : uuidv4()
    }

    if (id !== "") {
      personServices.update(id, newperson)
        .then(response => {
          setPersons(persons.map(person => person.id !== id ? person : response))
          setMessage(`Se actualizó a ${newName}`)
          setNewName('')
          setNewPhone('')
          setId('')
        })
      return
    }
    personServices.create(newperson).then(response => {
      setPersons(persons.concat(response))
      setMessage(`Se registró a ${newName}`)
      setNewName('')
      setNewPhone('')
    })

  }

  const handleUpdate = (id) => {
    const person = persons.find(person => person.id === id)
    setNewName(person.name)
    setNewPhone(person.number)
    setId(person.id)
  }

  const handleChangeMessage = () => setMessage('')
  const handleChangeErrorMessage = () => setErrorMessage('')

  const handleClickDelete = (id) => {
    if (confirm("Delete " + persons.find(person => person.id === id).name + " ?")) {
      personServices.delete(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== response.id))
          setMessage(`Se eliminó a ${persons.find(person => person.id === id).name}`)
        }
        ).catch(error => {
          setErrorMessage(`${persons.find(person => person.id === id).name} ya fue eliminado`)
          console.error(error)
        })

    } else {
      setNewName('')
      setNewPhone('')
      setId('')
    }
  }

  const onChangePerson = (e) => setNewName(e.target.value)
  const onChangeNumber = (e) => setNewPhone(e.target.value)
  const onChangeFilter = (e) => setNewFilter(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}
        handleChangeMessage={handleChangeMessage}
        errorMessage={errorMessage}
        handleChangeErrorMessage={handleChangeErrorMessage}
      />
      <Filter
        filter={newFilter}
        onChangeFilter={onChangeFilter}
      />
      <h3>Add a new</h3>
      <PersonForm
        onSavePerson={onSavePerson}
        newName={newName}
        onChangePerson={onChangePerson}
        newPhone={newPhone}
        onChangeNumber={onChangeNumber}
        id={id}
      />
      <h3>Numbers</h3>
      <ul>
        {(newFilter !== '')
          ?
          persons.filter(
            person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
            .map(person => <Persons key={person.id} person={person} />
            )
          :
          persons.map(person =>
            <Persons
              key={person.id}
              person={person}
              handleClick={handleUpdate}
              handleClickDelete={handleClickDelete}
            />)}
      </ul>
    </div>
  )
}

export default App
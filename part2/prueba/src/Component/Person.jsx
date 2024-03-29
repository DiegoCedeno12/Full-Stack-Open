const Person = ({ person, handleClick, handleClickDelete }) => {
  return <>
    <li onClick={() => handleClick(person.id)}>
      {person.name} {person.number}
    </li>
  <button onClick={() => handleClickDelete(person.id)}>delete</button>
  </>
}

export default Person
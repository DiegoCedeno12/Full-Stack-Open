const Filter = ({ newFilter, onChangeFilter }) => {
  return (
    <div>
      Filter shown with
      <input value={newFilter} onChange={onChangeFilter}/>
    </div>
  )
}

export default Filter
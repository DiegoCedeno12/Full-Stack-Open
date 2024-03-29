const Notification = ({ message, handleChangeMessage, errorMessage, handleChangeErrorMessage }) => {
  if (message !== '' || errorMessage !== '') {
    setTimeout(() => {
      handleChangeErrorMessage()
      handleChangeMessage()
    }, 5000)
  }

  return (
    <div className={message !== '' ? "success" : errorMessage !== '' ? "error" : "oculto"}>
      { message !== '' ? message : errorMessage }
    </div>
  )
}

export default Notification
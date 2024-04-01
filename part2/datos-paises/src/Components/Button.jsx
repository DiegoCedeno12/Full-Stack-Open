import { useState } from "react"

export default function Button({ show, handleClick }) {
  return (
    <button onClick={() => { handleClick() }} >{show ? "hide" : "show"}</button>
  )
}
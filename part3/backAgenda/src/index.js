const express = require("express")
const morgan = require("morgan")

const app = express()
app.disable("x-powered-by")

app.use(express.json())
app.use(morgan("dev"))

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

const generateId = () => {
  const tm = (Math.random().toPrecision(1) * persons.length * 10).toFixed(0)
  if (persons.length > 10) return tm * 10
  if (persons.length > 20) return tm * 100
  return tm
}

app.get("/info", (req, res) => {
  const length = persons.length
  const date = new Date()
  res.send(`
    <p>Phonebook has info for ${length} people</p>
    <p>${date}</p>
  `)
})

app.get("/api/persons", (req, res) => {
  res.json(persons)
})

app.post("/api/persons", (req, res) => {
  const { name, number } = req.body
  if (!name || !number) return res.status(400).json({ error: "El nombre y el numero no pueden estar vacios" })
  if (persons.find(p => p.name === name)) return res.status(400).json({ error: "El nombre ya existe en la agenda" })
  const person = { name, number, id: Number(generateId()) }
  persons = persons.concat(person)
  res.status(201).json(person)
})

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id
  const person = persons.find(person => person.id === Number(id))
  if (!person) return res.status(404).json({ message: "Person not found" })
  res.status(200).json(person)
})

app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id
  if (!persons.find(p => p.id === Number(id))) return res.status(404).json({ message: "Person not found" })
  persons = persons.filter(person => person.id !== Number(id))
  res.status(204).send(persons)
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
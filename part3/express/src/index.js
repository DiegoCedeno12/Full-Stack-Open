const express = require('express')

const app = express()

app.use(express.json())

let notes = [
  {
    "id": "1",
    "important": false
  },
  {
    "id": "2",
    "content": "Browser can execute only JavaScript",
    "important": true
  },
  {
    "id": "3",
    "important": true
  },
  {
    "id": "4",
    "content": "mnbmnb",
    "important": true
  },
  {
    "id": "5",
    "content": "Mi nueva nota",
    "important": true
  },
  {
    "id": "6",
    "content": "Se va en bug",
    "important": true
  },
  {
    "id": "7",
    "content": "Como estamos mi gente",
    "important": true
  }
]

app.get("/", (req, res) => {
  res.send("Bienvenido")
})

app.get("/api/notes", (req, res) => {
  res.json(notes)
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})

app.get("/api/notes/:id", (req, res) => {
  let id = req.params.id
  const note = notes.find(note => (typeof note.id === "string" ? note.id : note.id.toString()) === id)
  return note !== undefined ? res.json(note) : res.status(404).end()//.send({messsage:"Not found note"})
})

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id
  const note = notes.filter(note => note.id !== id)
  return res.status(204).end()
})


app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000")
})
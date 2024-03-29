import { useState } from 'react'
import Statistics from './Component/Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Dar opinión</h2>
      <button onClick={() => setGood(good + 1)} value={good}>Bueno</button>
      <button onClick={() => setNeutral(neutral + 1)} value= {neutral}>Neutral</button>
      <button onClick={() => setBad(bad + 1)} value={bad}>Malo</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
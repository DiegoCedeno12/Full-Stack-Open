import Content from "./Components/Content"
import Header from "./Components/Header"
import Total from "./Components/Total"

const App = () => {
  const course = 'Half Stack application development'
  const data = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={data} />
      <Total part={data} />
    </div>
  )
}

export default App
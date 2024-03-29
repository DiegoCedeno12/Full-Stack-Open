import All from "./All"
import Average from "./Average"
import Positive from "./Positive"
import StatisticLine from "./StatisticLine"

const Statistics = (props) => {
    let { good, neutral, bad } = props

    return (
        <table style={{ marginTop: '20px' }}>
            <thead>
                <th>Estadisticas</th>
            </thead>
            <tbody>
                <StatisticLine text="Bueno" value={good} />
                <StatisticLine text="Neutral" value={neutral} />
                <StatisticLine text="Malo" value={bad} />
                <All good={good} neutral={neutral} bad={bad} />
                <Average good={good} neutral={neutral} bad={bad} />
                <Positive good={good} neutral={neutral} bad={bad} />
            </tbody>
        </table>
    )
}

export default Statistics
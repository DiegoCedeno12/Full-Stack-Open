const Average = ({ good, neutral, bad }) => {
    return (
        <tr>
            <td>Promedio:</td>
            <td>{((good + neutral + bad) / 3).toFixed(1)}</td>
        </tr>
    )
}

export default Average
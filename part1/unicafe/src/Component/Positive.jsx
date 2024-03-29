const Positive = (props) => {

    return (
        <tr>
            <td>Positivo:</td>
            <td>{props.good + props.neutral + props.bad !== 0 ?
                (props.good / (props.good + props.neutral + props.bad) * 100).toFixed(1) :
                0}%</td>
        </tr>
    )
}

export default Positive
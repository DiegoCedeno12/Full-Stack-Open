const All = (props) => {

    return (
        <tr>
            <td>Total:</td>
            <td>{props.good + props.neutral + props.bad}</td>
        </tr>
    )
}

export default All;
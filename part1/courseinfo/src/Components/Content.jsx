import Part from "./Part"


const Content = ({ parts }) => {
    return (
        <>
            <ul>
                {parts.map(part => <Part key={part.id} part={part} />)}
            </ul>
            <h4>
                Total of {parts.reduce((a, b) => a + b.exercises, 0)} exercises
            </h4>
        </>
    )
}

export default Content
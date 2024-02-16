export default function Total({ part }){
    return (
        <p>
            Number of exercises {part[0].exercises + part[1].exercises + part[2].exercises}
        </p>
    )
}
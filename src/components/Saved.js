

function Saved({ saved, callback }) {
    return (
        <div>
            <ul>
                {saved.map((joke, index) => <li key={index} onClick={() => callback(index)}>{joke}</li>)}
            </ul>
        </div>
    )
}

export default Saved;
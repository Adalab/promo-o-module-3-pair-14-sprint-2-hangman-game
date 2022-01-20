function Errors(props) {

    return (
        <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
                {props.renderErrorLetters()}
            </ul>
        </div>

    )
}
export default Errors; 
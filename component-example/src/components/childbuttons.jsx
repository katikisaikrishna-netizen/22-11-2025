function Childbuttons(props) {   
    return (
        <div>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            <h2>Child Buttons Component</h2>
        </div>
    );
}
export default Childbuttons;    
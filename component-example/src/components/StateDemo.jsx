import {useState} from 'react';

function StateDemo() {
    const [count, setCount] = useState(0);      
    return (
        <div>
            <h2>State Demo Component</h2>       
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button
                onClick={() => {
                    if (count > 0) {
                        setCount(count - 1);
                    } else {
                        alert('count should be +ve');
                    }
                }}
                style={{ backgroundColor: count === 0 ? 'red' : undefined, color: count === 0 ? 'white' : undefined }}
            >
                Decrement
            </button>
        </div>
    );
}   

export default StateDemo;
import React, { useState } from 'react';
import ChildDisplay from './childdisplay';
import Childbuttons from './childbuttons';
function Parent() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildDisplay count={count} /> 
            <Childbuttons 
                increment={() => setCount(count + 1)} 
                decrement={() => setCount(count - 1)}
            />          
        </div>
    );
}
export default Parent;  
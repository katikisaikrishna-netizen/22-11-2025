import { useState } from 'react';

function InputDemo() {
    const [name, setName] = useState('');
    return (
        <div>
            <input placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
            <p>Your name is: {name}</p>     
        </div>
    );
}

export default InputDemo;
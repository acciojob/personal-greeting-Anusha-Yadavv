import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');
  
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="nameInput">Enter your name:</label>
      <input 
        id="nameInput" 
        type="text" 
        value={name} 
        onChange={handleChange} 
      />
      <p>{`Hello ${name}!`}</p>
    </div>
  );
}

export default Greeting;

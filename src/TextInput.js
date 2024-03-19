import React, { useState } from 'react';

function TextInputComponent() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputText} 
        onChange={handleInputChange} 
        placeholder="Enter your name here" 
      />
      <p>Hello, {inputText}. Welcome to my project.</p>
      <button onCLick={() =>setInputText('')}>Clear</button>
    </div>
  );
}

export default TextInputComponent;
import React, { useEffect,useState } from 'react';

function TextInputComponent() {
  const useNameState = (initState) => {
      const [nameTerm, setNameTerm] = useState(localStorage.getItem('name') || initState);
      
      useEffect(() => {
        localStorage.setItem('name', nameTerm);
      }, [nameTerm]); 
      
      return [nameTerm, setNameTerm];
  }    
    
  const [inputText, setInputText] = useNameState('незнакомец');
  
 
    
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <h1>Здравствуй, {inputText}. Добро пожаловать на мой сайт.</h1>
      <input 
        type="text" 
        value={inputText} 
        onChange={handleInputChange} 
        placeholder="Enter your name here" 
      />
    </div>
  );
}

export default TextInputComponent;
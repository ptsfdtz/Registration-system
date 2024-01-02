import React, { useEffect, useState } from 'react';

const InputComponent = ({ label, type, name, value, onChange,validator }) => {
  const [isLoaded,setIsLoaded]=useState(false);
  const [isValid,setIsValid]=useState(true);
  const [message,setMessage]=useState("");

  function validate(){
    if(!validator)return ;
    else if(!isLoaded){
      setIsLoaded(true);
      return;
    }

    const {valid,message}=validator(value);
    setIsValid(valid);setMessage(message);
  }

  useEffect(()=>{
    const debounce = setTimeout(validate,1000);
    return ()=>clearTimeout(debounce);
  },[value])
  
  return (
    <div>
      <label>
        {label}:
        <input style={{outlineColor:isValid?"black":"red"}} type={type} name={name} value={value} onChange={onChange}/>
        {message&&(<p style={{color:"grey"}}>{message}</p>)}
      </label>
    </div>
  );
};

export default InputComponent;


import React, { useState } from 'react';

const DropdownComponent = ({label,options}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
        <label htmlFor={"select-"+label}>{label}:</label>
        <select name="" id={"select-"+label}>
            {
                options.map(item=>(
                    <option key={item} value={item}>{item}</option>
                ))
            }
        </select>
    </div>
  );
};

export default DropdownComponent;

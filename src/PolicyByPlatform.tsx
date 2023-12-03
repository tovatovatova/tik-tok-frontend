// YourParentComponent.jsx
import React, { useState } from 'react';
import Platform from './Platform';
import Policy from './Policy';

const PolicyByPlatform = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isSpecificOptionSelected, setIsSpecificOptionSelected] = useState(false);

  const handleDropdownChange = (event : any) => {
    const selectedValue = event.target.value;
    const jsonString = JSON.stringify(selectedValue);
    setSelectedOption(jsonString);
    // Check if the selected option is the specific one
    setIsSpecificOptionSelected(jsonString === 'custom');
  };

  return (
    <div>
      <Platform onDropdownChange={handleDropdownChange} selectedOption={selectedOption} />
      {isSpecificOptionSelected && <Policy isEnabled={isSpecificOptionSelected} />}
    </div>
  );
};

export default PolicyByPlatform;

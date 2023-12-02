// TextBoxComponent.tsx
import React from 'react';

interface TextBoxProps {
  isEnabled: boolean;
}

const TextBoxComponent: React.FC<TextBoxProps> = ({ isEnabled }) => {
  return (
    <div>
      <label htmlFor="textBox">Enter the policy:</label>
      <input type="text" id="textBox" placeholder="Type here..." disabled={!isEnabled} />
    </div>
  );
};

export default TextBoxComponent;

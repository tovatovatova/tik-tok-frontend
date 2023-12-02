import React, { useState } from 'react';

const Platform = ({ selectedOption }: any) => {
  const objects = ['tiktok', 'instagram', 'facebook', 'twitter', 'custom'];

  // State to track the selected object
  const [selectedObject, setSelectedObject] = useState('');

  // Event handler for dropdown change
  const handleObjectChange = (event: any) => {
    setSelectedObject(event.target.value);
  };

  return (
    <div>
      <label htmlFor="objectSelector">Select an Object:</label>
      <select
        id="objectSelector"
        value={selectedObject}
        onChange={handleObjectChange}
      >
        <option value="">Select an object</option>
        {objects.map((object, index) => (
          <option key={index} value={object}>
            {object}
          </option>
        ))}
      </select>

      {selectedObject && (
        <p>You selected: {selectedObject}</p>
      )}
    </div>
  );
};

export default Platform

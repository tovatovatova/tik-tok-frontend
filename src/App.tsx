import React, { useState, ChangeEvent } from 'react';
import './App.css';

function App(): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        setError('Please select a file');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.text) {
          setTranscription(data.text);
          setError(''); // Clear any previous error message
        } else {
          setError('No transcription found');
        }
      } else {
        setError('Error uploading file');
      }
    } catch (error) {
      setError('Error uploading file');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Upload an audio file for transcription:
          <input type="file" accept="audio/*" onChange={handleFileChange} />
        </p>
        <button onClick={handleUpload}>Upload</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {transcription && (
          <div>
            <h3>Transcription:</h3>
            <p>{transcription}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

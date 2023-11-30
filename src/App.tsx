import React, { useState, ChangeEvent } from 'react';
import { Button, Container, Typography, TextField } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  textAlign: 'center',
  paddingTop: '20px',
});

const StyledButton = styled(Button)({
  margin: '10px 0',
});

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
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Audio Transcription
      </Typography>
      <TextField
        type="file"
        onChange={handleFileChange}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <StyledButton variant="contained" color="primary" onClick={handleUpload}>
        Upload
      </StyledButton>
      {error && (
        <Typography variant="body1" style={{ color: 'red' }}>
          {error}
        </Typography>
      )}
      {transcription && (
        <div>
          <Typography variant="h5">Transcription:</Typography>
          <Typography variant="body1">{transcription}</Typography>
        </div>
      )}
    </StyledContainer>
  );
}

export default App;

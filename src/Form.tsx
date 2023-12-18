import React, { useState, ChangeEvent } from 'react';
import { Button, Container, Typography, TextField, Grid, Select, MenuItem, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { SAMPLE_RESULTS } from './sampleResults';

const StyledContainer = styled(Container)({
  textAlign: 'center',
  paddingTop: '20px',
});

const StyledButton = styled(Button)({
  margin: '10px 0',
});

function Form({ setResults, setLoading, setVideoFilePath, loading }: any): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');
  const [platform, setPlatform] = useState('TikTok');
  const [language, setLanguage] = useState('English');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      setVideoFilePath(URL.createObjectURL(files[0]))
    }
  };

  const handleUpload = async () => {
    setResults([])
    if (process.env.REACT_APP_SAMPLE == 'true') {
      setLoading(true)
      setTimeout(() => setResults(SAMPLE_RESULTS), 3000)
      return
    }
    try {
      setLoading(true)
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
        if (data) {
          setResults(data);
          setError(''); // Clear any previous error message
        } else {
          setError('Something went wrong!');
        }
      } else {
        setError('Error uploading file');
      }
    } catch (error) {
      setError('Error uploading file');
    } finally {
      setLoading(false)
    }
  };

  return (

    <form onSubmit={(e) => e.preventDefault()}>

      <div className='row'>
        <div className="form-group mr-2 col">
          <label htmlFor="exampleSelect1" className="form-label mt-4">Select Platform</label>
          <select className="form-select" id="exampleSelect1">
            <option>TikTok</option>
            <option>Instagram</option>
            <option>Facebook</option>
            <option>Youtube</option>
          </select>
        </div>
        <div className="form-group col">

          <label htmlFor="exampleSelect2" className="form-label mt-4">Select Language</label>
          <select className="form-select" id="exampleSelect2">
            <option>English</option>
            <option>Hebrew</option>
            <option>Russian</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>
        <div className="form-group col">

          <label htmlFor="formFile" className="form-label mt-4">Select File to Analyze</label>
          <input className="form-control" onChange={handleFileChange} type="file" id="formFile" />
        </div>
      </div>
      <br />
      <button type="submit" onClick={handleUpload} className="btn btn-primary col-lg-12" style={{ height: 50, position: 'relative' }}>
        {loading ? <CircularProgress style={{ position: 'absolute', bottom: 5, left: '48%' }} size={35} /> : 'Analyze'}
      </button>
    </form>

  )
  {/* <div>
      <StyledContainer>
        <Typography variant="h4" gutterBottom>
          CheckTok
        </Typography>
        <p>The Next Gen Video/Policy Analyzer</p>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={3}>
            <TextField
              type="file"
              onChange={handleFileChange}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <Select
              value={platform}
              onChange={(event) => setPlatform(event.target.value)}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="TikTok">TikTok</MenuItem>
              <MenuItem value="Instagram">Instagram</MenuItem>
              <MenuItem value="Facebook">Facebook</MenuItem>
              <MenuItem value="Twitter">Twitter</MenuItem>
              <MenuItem value="Custom">Custom</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3}>
            <Select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="Hebrew">Hebrew</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Russian">Russian</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="Arabic">Arabic</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3}>
            <StyledButton variant="contained" color="primary" onClick={handleUpload}>
              ANALYZE VIDEO
            </StyledButton>
          </Grid>
        </Grid>
      </StyledContainer>
    </div> */}

}

export default Form;

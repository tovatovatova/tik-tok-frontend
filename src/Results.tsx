import React, { useState } from 'react';
import { Grid, Modal, Divider } from '@mui/material';
import './Results.css'; // Assuming you have a separate CSS file for styles

export type ResultsParams = {
  score: number
  details: {
      video_results: { score: number; details: { image_url: string; reason: string }[] },
      audio_results: { score: number; details: { word: string; reason: string }[] },
      text_results: { score: number; details: { image_url: string; word: string; reason: string }[] },
      static_results: { score: number; details: { width: number; height: number; bitrate: number; snr: number } }
  }
}

const Results = (jsonFormat: ResultsParams) => {
  const { score, details } = jsonFormat;
  const { video_results, audio_results, text_results, static_results } = details;

  // State for modal
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  // Handlers for modal
  const handleOpen = (content: string) => {
    setModalContent(content);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="results-container">
      {/* Display the main score */}
      <h1 className="main-score">Main Score: {score}</h1>

      <Grid container spacing={2}>
        {/* Display video results */}
        <Grid item xs={3}>
          <h2>Video Results</h2>
          <p className="sub-score">Score: {video_results.score}</p>
          {video_results.details.map((result, index) => (
            <div key={index} className="result-item">
              <img 
                src={result.image_url} 
                alt={`Frame ${index}`} 
                onClick={() => handleOpen(result.image_url)} 
                className="result-image"
              />
              <h3>Reason: {result.reason}</h3>
            </div>
          ))}
        </Grid>

        <Divider orientation="vertical" flexItem />

        {/* Display audio results */}
        <Grid item xs={3}>
          <h2>Audio Results</h2>
          <p className="sub-score">Score: {audio_results.score}</p>
          {audio_results.details.length === 0 ? <p>No violations found</p> : audio_results.details.map((result, index) => (
            <div key={index} className="result-item">
              <h3>Word: {result.word}</h3>
              <p>Reason: {result.reason}</p>
            </div>
          ))}
        </Grid>

        <Divider orientation="vertical" flexItem />

        {/* Display text results */}
        <Grid item xs={3}>
          <h2>Text Results</h2>
          <p className="sub-score">Score: {text_results.score}</p>
          {text_results.details.map((result, index) => (
            <div key={index} className="result-item">
              <h3>Word: {result.word}</h3>
              <img 
                src={result.image_url} 
                alt={`Frame ${index}`} 
                onClick={() => handleOpen(result.image_url)} 
                className="result-image"
              />
              <h3>Reason: {result.reason}</h3>
            </div>
          ))}
        </Grid>

        <Divider orientation="vertical" flexItem />

        {/* Display static results */}
        <Grid item xs={3}>
          <h2>Static Results</h2>
          <p className="sub-score">Score: {static_results.score}</p>
          <div className="result-item">
            <p>Width: {static_results.details.width}</p>
            <p>Height: {static_results.details.height}</p>
            <p>Bitrate: {static_results.details.bitrate}</p>
            <p>SNR: {static_results.details.snr}</p>
          </div>
        </Grid>
      </Grid>

      {/* Modal for displaying clicked image */}
      <Modal open={open} onClose={handleClose}>
        <img src={modalContent} alt="Modal content" className="modal-image"/>
      </Modal>
    </div>
  );
};

export default Results;

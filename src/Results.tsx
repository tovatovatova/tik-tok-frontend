import React, { useState } from 'react';

export type ResultsParams = {
    score: number
    details: {
        video_results: { score: number; details: { image_url: string; reason: string }[] },
        audio_results: { score: number; details: { word: string; reason: string }[] },
        text_results: { score: number; details: { image_url: string; word: string; reason: string }[] },
        static_results: { score: number; details: { width: number; height: number; bitrate: number; snr: number } }
    }
}

const Results = (jsonFormat : ResultsParams /*{rank, details} : VideoResultsParams*/) =>{
    const { score, details } = jsonFormat;
      const { video_results, audio_results, text_results, static_results } = details;

      return <div>
      {/* Display the main score */}
      <h1>Main Score: {score}</h1>

      {/* Display video results */}
      <div>
        <h2>Video Results</h2>
        <p>Score: {video_results.score}</p>
        {video_results.details.map((result, index) => (
          <div key={index}>
            <img src={result.image_url} alt={`Frame ${index}`} />
            <h3>Reason: {result.reason}</h3>
          </div>
        ))}
      </div>

      {/* Display audio results */}
      <div>
        <h2>Audio Results</h2>
        <p>Score: {audio_results.score}</p>
        {audio_results.details.map((result, index) => (
          <div key={index}>
            <h3>Word: {result.word}</h3>
            <p>Reason: {result.reason}</p>
          </div>
        ))}
      </div>

      {/* Display text results */}
      <div>
        <h2>Text Results</h2>
        <p>Score: {text_results.score}</p>
        {text_results.details.map((result, index) => (
          <div key={index}>
            <h3>Word: {result.word}</h3>
            <img src={result.image_url} alt={`Image ${index}`} />
            <p>Reason: {result.reason}</p>
          </div>
        ))}
      </div>

      {/* Display static results */}
      <div>
        <h2>Static Results</h2>
        <p>Score: {static_results.score}</p>
        <div>
          <h3>Width: {static_results.details.width}</h3>
          <h3>Height: {static_results.details.height}</h3>
          <h3>Bitrate: {static_results.details.bitrate}</h3>
          <h3>SNR: {static_results.details.snr}</h3>
        </div>
      </div>
    </div>
}

export default Results
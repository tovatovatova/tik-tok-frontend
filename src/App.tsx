import React, { useState, ChangeEvent, useRef } from 'react';
import './App.css'
import Language from './Language';
import PolicyByPlatform from './PolicyByPlatform';
import Results from './Results';
import type { ResultsParams, Section } from './Results';
import Form from './Form'
import { CircularProgress } from '@mui/material';
import Display from './Display';
import ReactPlayer from 'react-player';

function App(): JSX.Element {
  const [results, setResults] = useState<Section[]>([]);
  const [loading, setLoading] = useState(false);
  const [videoFilePath, setVideoFilePath] = useState('')
  const [playing, setPlaying] = useState(true)
  const playerRef = React.createRef<ReactPlayer>()
  const handleSetResults = (data: Section[]) => {
    setResults(data);
    setLoading(false); // stop loading when results are updated
  };
  
  return (
    <div className='container'>
      <Form setResults={handleSetResults} setLoading={setLoading} setVideoFilePath={setVideoFilePath} loading={loading} />
      <br/>
      <Display videoFilePath={videoFilePath} playerRef={playerRef} playing={playing} />
      <div><Results results={results} playerRef={playerRef} setPlaying={setPlaying} /></div>
    </div>
  );
}

export default App;

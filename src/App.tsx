import { useState, useRef } from 'react';
import './App.css'
import Results from './Results';
import type { Section } from './Results';
import Form from './Form'

import Display from './Display';
import ReactPlayer from 'react-player';

function App(): JSX.Element {
  const [results, setResults] = useState<Section[]>([]);
  const [loading, setLoading] = useState(false);
  const [videoFilePath, setVideoFilePath] = useState('')
  const [playing, setPlaying] = useState(true)
  const playerRef = useRef<ReactPlayer>(null)
  const handleSetResults = (data: Section[]) => {
    setResults(data);
    setLoading(false); // stop loading when results are updated
  };
  return (
    
    <div className='container'>
      <Form setResults={handleSetResults} setLoading={setLoading} setVideoFilePath={setVideoFilePath} loading={loading} />
      <br />
      <Display videoFilePath={videoFilePath} playerRef={playerRef} playing={playing} setPlaying={setPlaying} />
      <div><Results results={results} playerRef={playerRef} setPlaying={setPlaying} /></div>
    </div>
  );
}

export default App;

import React, { useState, ChangeEvent } from 'react';
import './App.css'
import Language from './Language';
import PolicyByPlatform from './PolicyByPlatform';
import Results from './Results';
import type { ResultsParams } from './Results';
import Form from './Form'
import { CircularProgress } from '@mui/material';

function App(): JSX.Element {
  const [results, setResults] = useState({} as ResultsParams);
  const [loading, setLoading] = useState(false);

  const handleSetResults = (data: ResultsParams) => {
    setResults(data);
    setLoading(false); // stop loading when results are updated
  };

  return (
    <div>
      <Form setResults={handleSetResults} setLoading={setLoading}/>
      {loading ? <div style={{ marginLeft: '50%', marginTop: '10%' }}><CircularProgress /></div> : JSON.stringify(results) == '{}' ? <p></p> : <div><Results {...results}/></div>}
    </div>
  );
}

export default App;

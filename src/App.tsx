import React, { useState, ChangeEvent } from 'react';
import './App.css'
import Language from './Language';
import PolicyByPlatform from './PolicyByPlatform';
import Results from './Results';
import UploadFile from './UploadFile';
import type { ResultsParams } from './Results';

function App(): JSX.Element {
  const [results, setResults] = useState({} as ResultsParams)
  return (
    <div>
      <UploadFile setResults={setResults}/>
     <Language/>
      <PolicyByPlatform/>
      {JSON.stringify(results) == '{}' ? null : <div><Results {...results}/></div>}
    </div>
  );
}

export default App;

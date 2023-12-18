import React, { Ref, RefObject, useState } from 'react';
import { Grid, Modal, Divider } from '@mui/material';
import './Results.css'; // Assuming you have a separate CSS file for styles
import ReactPlayer from 'react-player';

export type SectionTypes = 'video' | 'transcript' | 'text' | 'quality'
export type Section = {
  type: SectionTypes
  info: string
  score: number
  start: number
  end: number
  reason: string
}

export type ResultsParams = {
  results: Section[]
  playerRef: RefObject<ReactPlayer>
  setPlaying: any
}

const Results = ({ results, playerRef, setPlaying }: ResultsParams) => {
  return (<>
    {results.map(section => {
      return <div>
        {section.score}
        <button onClick={() => {
          playerRef.current && playerRef.current.seekTo(section.start)
          setPlaying(false)
        }}>{JSON.stringify(section)}</button>
      </div>
    })}
  </>);
  //   <fieldset className="form-group">
  //   <legend className="mt-4">Ranges</legend>
  //     <label htmlFor="customRange1" className="form-label">Example range</label>
  //     <input type="range" className="form-range" id="customRange1"/>
  //     <label htmlFor="disabledRange" className="form-label">Disabled range</label>
  //     <input type="range" className="form-range" id="disabledRange" />
  //     <label htmlFor="customRange3" className="form-label">Example range</label>
  //     <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3"/>
  // </fieldset>
};

export default Results;

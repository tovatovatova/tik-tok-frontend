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
        }}>{section.reason}</button>
      </div>
    })}
  </>);
};

export default Results;

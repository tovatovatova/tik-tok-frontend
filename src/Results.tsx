import React, { Ref, RefObject, useState } from 'react';
import { Grid, Modal, Divider } from '@mui/material';
import './Results.css'; // Assuming you have a separate CSS file for styles
import ReactPlayer from 'react-player';
import AnalyzeType from './AnalyzeType';

const SECTIONS_TYPES = ['video', 'transcript', 'text', 'quality'] as const
export type SectionTypes = (typeof SECTIONS_TYPES)[number]
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
    {SECTIONS_TYPES.map((SectionType) => {
      return <AnalyzeType setPlaying={setPlaying} SectionType={SectionType} playerRef={playerRef} sections={results.filter(section => section.type === SectionType)}/>
    })}
  </>);
};

export default Results;

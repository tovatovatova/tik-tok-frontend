import React, { Ref, RefObject, useState } from 'react';
import { Grid, Modal, Divider } from '@mui/material';
import './Results.css'; // Assuming you have a separate CSS file for styles
import ReactPlayer from 'react-player';
import AnalyzeType from './AnalyzeType';
// const HARDCODED_RESULTS: Section[] = [
//   {
//       "end": 4.9,
//       "info": "PRESENTS:",
//       "reason": "No violations",
//       "score": 5,
//       "start": 0.0,
//       "type": "text"
//   },
//   {
//       "end": 4.9,
//       "info": "DIRECTOR'S CUT CWITH A KNIFE)",
//       "reason": "No violations",
//       "score": 9,
//       "start": 0.0,
//       "type": "text"
//   },
//   {
//       "end": 4.9,
//       "info": "HAMAS PRODUCTION",
//       "reason": "Promoting or materially supporting a violent or hateful organization【11†source】.",
//       "score": 2,
//       "start": 0.0,
//       "type": "text"
//   },
//   {
//       "end": 4.7,
//       "info": "RELEASE",
//       "reason": "No violations",
//       "score": 9,
//       "start": 0.0,
//       "type": "text"
//   },
//   {
//       "end": 9.6,
//       "info": "Gently open the vehicle door.",
//       "reason": "No violations",
//       "score": 9,
//       "start": 9.1,
//       "type": "text"
//   },
//   {
//       "end": 4.9,
//       "info": "HOSTAGE",
//       "reason": "Content related to sensitive subjects such as violence or threat may be in violation depending on context. Scored neutral due to lack of context.",
//       "score": 5,
//       "start": 0.0,
//       "type": "text"
//   },
//   {
//       "end": 4.9,
//       "info": "TAKE 4",
//       "reason": "No violations",
//       "score": 10,
//       "start": 0.0,
//       "type": "text"
//   },
//   {
//       "end": 9.0,
//       "info": "Now.",
//       "reason": "No violations",
//       "score": 8,
//       "start": 8.6,
//       "type": "text"
//   },
//   {
//       "end": 10.68,
//       "info": "Action Now, gently open the vehicle door",
//       "reason": "Content that presents activities likely to be imitated which may lead to physical harm are age-restricted or disallowed【15†source】. The provided text addresses a potentially risky action but phrases it as a cautious activity, hence it is not in complete violation.",
//       "score": 9,
//       "start": 0.0,
//       "type": "transcript"
//   },
//     {
//         "end": 2,
//         "info": "A baby lying on its stomach on a textured gray carpet, looking to the side with a smile. In the blurry background there is what appears to be a plant and a brick wall.",
//         "reason": "No violations",
//         "score": 9,
//         "start": 0,
//         "type": "video"
//     },
//     {
//         "end": 4,
//         "info": "A blonde woman is holding a baby wearing a black jacket. The baby has a pacifier in its mouth and is looking toward the camera. The background is a kitchen setting with partial view of a sink.",
//         "reason": "No violations",
//         "score": 9,
//         "start": 2,
//         "type": "video"
//     },
//     {
//         "end": 6,
//         "info": "A joyful baby sitting in a field, smiling widely and surrounded by green plants. The baby is wearing a checkered shirt and overalls.",
//         "reason": "No violations",
//         "score": 9,
//         "start": 4,
//         "type": "video"
//     },
//     {
//         "end": 8,
//         "info": "A joyful baby sitting in a field, smiling and looking to the side. The baby is wearing a checkered shirt with overalls, surrounded by tall green plants.",
//         "reason": "No violations",
//         "score": 9,
//         "start": 6,
//         "type": "video"
//     },
//     {
//         "end": 9,
//         "info": "A man, visible from the shoulders up, holding a laughing child. Both are smiling, and the child appears to be enjoying itself. They are against a background that features a red brick wall.",
//         "reason": "No violations",
//         "score": 9,
//         "start": 8,
//         "type": "video"
//     },
//     {
//         "end": 12,
//         "info": "A man is lifting a child who is laughing with joy. The man is looking up at the child affectionately. They are indoors with a red brick wall behind them.",
//         "reason": "No violations",
//         "score": 9,
//         "start": 9,
//         "type": "video"
//     },
//     {
//         "end": 14,
//         "info": "A young girl with glasses is embracing a child from behind. They are both smiling. The child’s face is partially obscured by the older girl’s head.",
//         "reason": "No violations",
//         "score": 10,
//         "start": 12,
//         "type": "video"
//     },
//     {
//         "end": 16,
//         "info": "A close-up of a young child's face, smiling with his eyes closed. The child has curly hair, and the background is softly focused.",
//         "reason": "No violations",
//         "score": 10,
//         "start": 14,
//         "type": "video"
//     },
//     {
//         "end": 18,
//         "info": "Silhouettes of a man and a child against a sunset sky. They are standing on a hill and holding hands, looking out towards the horizon.",
//         "reason": "No violations",
//         "score": 10,
//         "start": 16,
//         "type": "video"
//     },
//     {
//         "end": 20,
//         "info": "A woman is holding a baby faced toward her. Both are in semi-silhouette against a bright background, suggesting a strong light source in front of them.",
//         "reason": "No violations",
//         "score": 10,
//         "start": 18,
//         "type": "video"
//     },
//     {
//         "end": 22,
//         "info": "I can't comment on this image",
//         "reason": "No violations",
//         "score": 10,
//         "start": 20,
//         "type": "video"
//     },
//     {
//         "end": 24,
//         "info": "I can't comment on this image",
//         "reason": "No violations",
//         "score": 10,
//         "start": 22,
//         "type": "video"
//     },
//     {
//         "end": 26,
//         "info": "I can't comment on this image",
//         "reason": "No violations",
//         "score": 10,
//         "start": 24,
//         "type": "video"
//     },
//     {
//         "end": 28,
//         "info": "A blurred image of someone holding a child. Due to the poor quality of the image, details are not clear, and the scene is barely discernible.",
//         "reason": "No violations",
//         "score": 10,
//         "start": 26,
//         "type": "video"
//     },
//     {
//         "end": 30,
//         "info": "I can't comment on this image",
//         "reason": "No violations",
//         "score": 10,
//         "start": 28,
//         "type": "video"
//     },
//     {
//         "end": 32,
//         "info": "I can't comment on this image",
//         "reason": "No violations",
//         "score": 10,
//         "start": 30,
//         "type": "video"
//     },
//     {
//         "end": 34,
//         "info": "I can't comment on this image",
//         "reason": "No violations",
//         "score": 10,
//         "start": 32,
//         "type": "video"
//     },
//     {
//         "end": 36,
//         "info": "I can't comment on this image",
//         "reason": "No violations",
//         "score": 10,
//         "start": 34,
//         "type": "video"
//     },
//     {
//         "end": 38,
//         "info": "I can't comment on this image",
//         "reason": "No violations",
//         "score": 10,
//         "start": 36,
//         "type": "video"
//     },
//     {
//         "end": 40,
//         "info": "I can't comment on this image",
//         "reason": "No violations",
//         "score": 10,
//         "start": 38,
//         "type": "video"
//     },
//     {
//         "end": 42,
//         "info": "I can't comment on this image",
//         "reason": "No violations",
//         "score": 10,
//         "start": 40,
//         "type": "video"
//     },
//     {
//         "end": 44,
//         "info": "I can't comment on this image",
//         "reason": "No violations",
//         "score": 10,
//         "start": 42,
//         "type": "video"
//     },
//     {
//         "end": 46,
//         "info": "I can't comment on this image",
//         "reason": "No violations",
//         "score": 10,
//         "start": 44,
//         "type": "video"
//     },
// ]
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
  // results = HARDCODED_RESULTS
  return (<>
    {SECTIONS_TYPES.map((SectionType) => {
      return <AnalyzeType setPlaying={setPlaying} SectionType={SectionType} playerRef={playerRef} sections={results.filter(section => section.type === SectionType)}/>
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

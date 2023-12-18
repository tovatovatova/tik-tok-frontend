import { Ref, RefObject } from 'react'
import ReactPlayer from 'react-player'

const playerContainerStyle = {
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Set background color
};

const playerStyle = {
    maxHeight: '60vh', // Ensure it doesn't exceed the viewport height
    objectFit: 'contain', // Maintain aspect ratio without cropping
} as const;

type Params = {
    videoFilePath: string
    playerRef: RefObject<ReactPlayer>
    playing: boolean
}

export default ({ videoFilePath, playerRef, playing }: Params) => {

    if (videoFilePath === '') return null
    return (
        <div style={playerContainerStyle}>
            <ReactPlayer
                url={videoFilePath}
                ref={playerRef}
                width="100%"
                height="100%"
                controls={true}
                playing={playing}
                style={playerStyle}
            />
        </div>
    )
}
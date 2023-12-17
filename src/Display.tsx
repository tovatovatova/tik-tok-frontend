import { Ref, RefObject } from 'react'
import ReactPlayer from 'react-player'

type Params = {
    videoFilePath: string
    playerRef: RefObject<ReactPlayer>
    playing: boolean
}

export default ({ videoFilePath, playerRef, playing }: Params) => {
    
    
    return (
        <ReactPlayer url={videoFilePath} ref={playerRef} width="20%" height="20%" controls={true} playing={playing}  />
    )
}
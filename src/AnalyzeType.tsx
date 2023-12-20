import { RefObject, useState } from "react"
import { Section, SectionTypes } from "./Results"
import ReactPlayer from "react-player"
import { Modal, Tooltip } from "@mui/material"
import OurToolTip from "./OurToolTip"
import OurModal from "./OurModal"





type Params = {
    sections: Section[]
    SectionType: SectionTypes
    playerRef: RefObject<ReactPlayer>
    setPlaying: any
}

export default ({ SectionType, sections, playerRef, setPlaying }: Params) => {

    const [threshold, setThreshold] = useState(5)
    const [modalOpen, setModalOpen] = useState(false)

    return <>
        <br />
        <div style={{ position: 'relative', height: 60 }}>

            <br /><br />
            <div className="progress">
                {sections
                    .filter(section => section.score <= threshold)
                    .map(section => {
                        if (playerRef.current == null) return
                        const videoDuration = playerRef.current.getDuration()
                        const location = section.start / videoDuration * 100
                        return <><Tooltip
                            // open={tooltipOpen}
                            // onOpen={handleOpenTooltip}
                            // onClose={handleCloseTooltip}
                            key={`${section.info}${section.start}`}
                            arrow={true}
                            title={<OurToolTip setModalOpen={setModalOpen} section={section} />}
                            placement="top">
                            <div
                                style={{
                                    position: 'absolute',
                                    borderRadius: '50%',
                                    width: 20,
                                    height: 20,
                                    background: '#e83283',
                                    bottom: -5,
                                    left: location + '%',
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    playerRef.current?.seekTo(section.start)
                                    setPlaying(false)
                                }}
                            >
                            </div></Tooltip>
                            <OurModal modalOpen={modalOpen} setModalOpen={setModalOpen} section={section} />
                        </>
                    })}
            </div>
            <p style={{ position: 'absolute', left: 0, bottom: 0, color: 'white', fontSize: 25 }}>{SectionType}</p>
            <label htmlFor="customRange3" className="form-label" style={{ position: 'absolute', right: 160, bottom: 10 }}>{threshold}</label>
            <Tooltip title="Choose your visible violations" placement="top" arrow followCursor={true}><input type="range" className="form-range" min="0" max="10" step="1" id="customRange3" value={threshold} onChange={e => setThreshold(e.target.valueAsNumber)} style={{ position: 'absolute', 'width': '20vh', right: 0, bottom: 15, color: 'blue' }} /></Tooltip>
            <br /><br /><br />
        </div>
    </>
}
import { Modal } from "@mui/material"
import { Section } from "./Results"

type Params = {
    modalOpen: boolean
    setModalOpen: (_: boolean) => void
    section: Section
}

export default ({ modalOpen, setModalOpen, section }: Params) => {
    return <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <div id="source-modal" className="modal fade show" tabIndex={-1} style={{ display: "block", marginTop: '10%', padding: "50", width: "auto", height: "auto", marginLeft: "40%" }} aria-modal="true" role="dialog">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body">
                        <h3 className="modal-title" style={{ color: "white", display: "inline-block", marginRight: '10px' }}>SCORE:</h3>
                        <p style={{ display: "inline-block" }}>  {section.score}</p>
                        <br />
                        <h3 className="modal-title" style={{ color: "white", display: "inline-block", marginRight: '10px' }}>INFO:</h3>
                        <p style={{ display: "inline-block" }}>  {section.info}</p>
                        <br />
                        <h3 className="modal-title" style={{ color: "white", display: "inline-block", marginRight: '10px' }}>REASON:</h3>
                        <p style={{ display: "inline-block" }}>  {section.reason}</p>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
}

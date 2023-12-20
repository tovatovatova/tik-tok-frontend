import { Box, Modal, Typography } from "@mui/material"
import { Section } from "./Results"
import { useState } from "react";


type Params = {
    section: Section
    setModalOpen: (_: boolean) => void
}
export default ({ section, setModalOpen }: Params) => {
    const handleOpen = () => {
        setModalOpen(true)
    }
    const handleClose = () => setModalOpen(false);
    // const modalRef = useRef<HTMLDivElement>(null)

    return <div onClick={handleOpen} style={{cursor: 'pointer'}}>
        <p>{section.reason}</p><p>score: {section.score}<span style={{fontSize: 25}}> ...</span></p></div>
}
        // <div className="bs-component">

        //     <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target={modalRef} aria-controls="offcanvasExample">
        //         Button with data-bs-target
        //     </button>
        //     <div className="modal" ref={modalRef} tabIndex={-1}>
        //         <div className="modal-dialog" role="document">
        //             <div className="modal-content">
        //                 <div className="modal-header">
        //                     <h5 className="modal-title">Modal title</h5>
        //                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
        //                         <span aria-hidden="true"></span>
        //                     </button>
        //                 </div>
        //                 <div className="modal-body">
        //                     <p>Modal body text goes here.</p>
        //                 </div>
        //                 <div className="modal-footer">
        //                     <button type="button" className="btn btn-primary">Save changes</button>
        //                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
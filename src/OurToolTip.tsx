import { Box, Modal, Typography } from "@mui/material"
import { Section } from "./Results"
import { ReactNode, createRef, useRef, useState } from "react";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


type Params = {
    section: Section
}
export default ({ section }: Params) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const modalRef = createRef<HTMLDivElement>()

    return <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <h1>SCORE:</h1>
                    {section.score}
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2, color: 'black' }}>
                    <h1>INFO:</h1>
                    {section.info}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, color: 'black' }}>

                    <h1>REASON:</h1>
                    {section.reason}
                </Typography>

            </Box>
        </Modal>
        <p>{section.reason}</p><p>score: {section.score}</p><button onClick={handleOpen} type="button">Details</button></>
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
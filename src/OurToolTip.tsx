import { Box, Modal, Typography } from "@mui/material"
import { Section } from "./Results"
import { useState } from "react";


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
    closeToolTip: ()=>void
}
export default ({ section, closeToolTip }: Params) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true); console.log("Hello"); closeToolTip()};
    const handleClose = () => setOpen(false);
    // const modalRef = useRef<HTMLDivElement>(null)

    return <div onClick={handleOpen} style={{cursor: "pointer"}}>
        <Modal
            open={open}
            onClose={handleClose}
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
        <h1 style={{ color: "white", textAlign: "center", marginBottom: "5px" }}>{section.score}</h1>
        <p style={{ display: "inline-block", marginTop: "5px", marginBottom: "5px" }}>{section.reason}</p>
        <h3 style={{ display: "inline-block", color: "white" }}>...</h3>
        </div>
}
        {/* <Box sx={style}>
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

            </Box> */}
        {/* <Typography className="modal-title" id="modal-modal-title" variant="h6" component="h2">
                            <h1>SCORE:</h1>
                            {section.score}
                        </Typography>

                        <Typography className="modal-title" id="modal-modal-description" sx={{ mt: 2, color: 'black' }}>
                            <h1>INFO:</h1>
                            {section.info}
                        </Typography>
                        <Typography className="modal-title" id="modal-modal-description" sx={{ mt: 2, color: 'black' }}>

                            <h1>REASON:</h1>
                            {section.reason}
                        </Typography> */}
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
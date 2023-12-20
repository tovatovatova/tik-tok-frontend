import { Box, Modal, Typography } from "@mui/material"
import { Section } from "./Results"
type Params = {
    modalOpen: boolean
    setModalOpen: (_: boolean) => void
    section: Section
}

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

export default ({ modalOpen, setModalOpen, section }: Params) => {
    return <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2, color: 'black' }}>
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
}
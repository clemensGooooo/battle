import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

interface HelpProps {
    info: string,
    close: () => void,
    state: boolean
}

export default function Help (props: HelpProps) {

  return (
    <div>
      <Modal
        open={props.state}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Here are some short cuts !
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.info}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
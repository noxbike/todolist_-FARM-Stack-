import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 530,
  bgcolor: '#1e1e1e',
  border: '2px solid #1e1e1e',
  borderRadius: '12px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const handleClose = () => props.setOpen(false);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {props.element}
        </Box>
      </Modal>
    </div>
  );
}
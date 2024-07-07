import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Payment from './payment';
import CloseRounded from '@mui/icons-material/CloseRounded'
import  IconButton from '@mui/material/IconButton';
const match = [
  {
    label: "Peru vs Argentina",
    id: 123,
    matchdate: '17/08/2025',
    sport: 'Futbol',
    tournament: 'Copa America',
    teams: ["Peru", "Bolivia"],
    weight: [3, 0.8]
  }
];


export default function ModalStepper () {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal Stepper
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, 
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <IconButton aria-label="delete" onClick={handleClose}>
  <CloseRounded />
</IconButton>
          <Payment match= {match}/>
        </Box>
      </Modal>
    </div>
  );
};


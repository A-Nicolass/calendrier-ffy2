import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const EventModal = ({ isOpen, handleClose }) => {
  const [color, setColor] = useState('#9c27b0'); // Default color
  const [title, setTitle] = useState('');
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="create-event-modal"
      aria-describedby="create-event-modal-description"
    >
      <Box sx={style}>
        {/* <Typography id="create-event-modal" variant="h6" component="h2">
          Create Event
        </Typography> */}
        <input
          placeholder="Add Title"
          inputProps={{ 'aria-label': 'title' }}
          value={title}
          onChange={handleTitleChange}
          fullWidth
          style={{ border: 'none', outline: 'none', backgroundColor: 'transparent' }}
        />
        <hr style={{ borderColor: color, marginTop: '10px' }} />
        <div onClick={toggleColorPicker} style={{ width: '35px', height: '35px', backgroundColor: color, cursor: 'pointer' }}>
          {showColorPicker ? <SketchPicker color={color} onChangeComplete={handleChangeComplete} /> : null}
        </div>
        {/* ... le reste de votre modal */}
      </Box>
    </Modal>
  );
};

export default EventModal;



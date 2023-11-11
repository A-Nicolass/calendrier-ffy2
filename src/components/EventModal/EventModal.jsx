import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SketchPicker } from 'react-color';
import { Modal, Box, Button, TextareaAutosize } from '@mui/material';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { setStartDate, setEndDate, addEvent } from '../../redux/actions'; 

const EventModal = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const [color, setColor] = useState('#9c27b0'); 
  const [title, setTitle] = useState(''); 
  const [tempStartDate, setTempStartDate] = useState(new Date()); 
  const [tempEndDate, setTempEndDate] = useState(new Date()); 
  const [showStartDatePicker, setShowStartDatePicker] = useState(false); 
  const [showEndDatePicker, setShowEndDatePicker] = useState(false); 
  const [showColorPicker, setShowColorPicker] = useState(false); 
  const [comment, setComment] = useState(''); 

  const handleChangeComplete = (color) => {
    setColor(color.hex); 
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value); 
  };

  const handleStartDateChange = (date) => {
    setTempStartDate(date); 
  };

  const handleEndDateChange = (date) => {
    setTempEndDate(date); 
  };

  const handleConfirmStartDate = () => {
    dispatch(setStartDate(tempStartDate)); 
    setShowStartDatePicker(false); 
  };

  const handleConfirmEndDate = () => {
    dispatch(setEndDate(tempEndDate)); 
    setShowEndDatePicker(false); 
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value); 
  };

  const handleAddEvent = () => {
    // Créer un objet événement
    const event = {
      title,
      startDate: tempStartDate,
      endDate: tempEndDate,
      color,
      comment
    };
    
    dispatch(addEvent(event));
    handleClose(); 
  };

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

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="create-event-modal"
      aria-describedby="create-event-modal-description"
    >
      <Box sx={style}>
        <input
          placeholder="Add Title"
          value={title}
          onChange={handleTitleChange}
          style={{ border: 'none', outline: 'none', backgroundColor: 'transparent', width: '100%' }}
        />
        <hr style={{ borderColor: color, marginTop: '10px' }} />
        
        <div style={{ width: '35px', height: '35px', backgroundColor: color, cursor: 'pointer' }} onClick={() => setShowColorPicker(true)} />
        {showColorPicker && (
          <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
        )}

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Button onClick={() => setShowStartDatePicker(true)} style={{ marginTop: '10px' }}>
            {`Start Date: ${tempStartDate.toLocaleDateString()}`}
          </Button>
          {showStartDatePicker && (
            <div>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={tempStartDate}
                onChange={handleStartDateChange}
                renderInput={(params) => <div {...params} />} 
              />
              <Button onClick={handleConfirmStartDate}>OK</Button>
            </div>
          )}

          <Button onClick={() => setShowEndDatePicker(true)} style={{ marginTop: '10px' }}>
            {`End Date: ${tempEndDate.toLocaleDateString()}`}
          </Button>
          {showEndDatePicker && (
            <div>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={tempEndDate}
                onChange={handleEndDateChange}
                renderInput={(params) => <div {...params} />} 
              />
              <Button onClick={handleConfirmEndDate}>OK</Button>
            </div>
          )}
        </LocalizationProvider>

        <TextareaAutosize
          aria-label="Commentaire de l'événement"
          minRows={3}
          placeholder="Ajouter un commentaire..."
          value={comment}
          onChange={handleCommentChange}
          style={{ width: '100%', marginTop: '10px' }}
        />

        <Button onClick={handleAddEvent} style={{ marginTop: '10px' }}>
          Add
        </Button>
      </Box>
    </Modal>
  );
};

export default EventModal;

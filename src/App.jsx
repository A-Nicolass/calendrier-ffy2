import React, { useState } from 'react';
import CalendarView from './components/CalendarView/CalendarView';
import DayView from './components/DayView/DayView';
import EventModal from './components/EventModal/EventModal';
import { Button } from '@mui/material'; // Assurez-vous que @mui/material est installé
import './App.scss';

function App() {
  // État pour contrôler l'ouverture de la modal
  const [isModalOpen, setModalOpen] = useState(false);

  // Fonction pour ouvrir la modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Fonction pour fermer la modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className='container-all'>
        <DayView />
        {/* Bouton pour ouvrir la modal */}
        <Button variant="contained" onClick={handleOpenModal}>
          +
        </Button>
        <EventModal isOpen={isModalOpen} handleClose={handleCloseModal} />
        <CalendarView />
      </div>
    </>
  )
}

export default App;

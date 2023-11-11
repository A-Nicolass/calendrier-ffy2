import React, { useState } from 'react';
import CalendarView from './components/CalendarView/CalendarView';
import DayView from './components/DayView/DayView';
import EventModal from './components/EventModal/EventModal';
import './App.scss';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='container-all'>
      <DayView handleOpenModal={handleOpenModal} />
      <EventModal isOpen={isModalOpen} handleClose={handleCloseModal} />
      <CalendarView />
    </div>
  );
}

export default App;

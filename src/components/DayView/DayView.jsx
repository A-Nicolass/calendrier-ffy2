// DayView.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Button } from '@mui/material';
import format from 'date-fns/format';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';
import AddIcon from '@mui/icons-material/Add';
import './DayView.scss';

const hexToRGBA = (hex, opacity) => {
  let r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const DayView = ({ handleOpenModal }) => {
  const selectedDay = useSelector(state => state.calendar.currentDay);
  const events = useSelector(state => state.calendar.events);

  const formattedDate = format(selectedDay, 'd MMMM');

  const dayEvents = events.filter(event => {
    const startDate = startOfDay(new Date(event.startDate));
    const endDate = endOfDay(new Date(event.endDate));
    return isWithinInterval(new Date(selectedDay), { start: startDate, end: endDate });
  });

  return (
    <Paper className="day-view-container">
      <div className="day-view-header">
        <h1>{formattedDate}</h1>
        <Button 
          variant="contained" 
          onClick={handleOpenModal}
          className="add-event-button"
        >
          <AddIcon />
        </Button>
      </div>
      {dayEvents.length > 0 ? (
        dayEvents.map((event, index) => (
          <div 
            key={index} 
            className="event-item" 
            style={{ 
              '--event-border-color': event.color,
              backgroundColor: hexToRGBA(event.color, 0.2)
            }}
          >
            <h2 className='event-title'>{event.title}</h2>
            <h3 className='event-comment'>{event.comment}</h3>
          </div>
        ))
      ) : (
        <h2>No events for this day.</h2>
      )}
    </Paper>
  );
};

export default DayView;

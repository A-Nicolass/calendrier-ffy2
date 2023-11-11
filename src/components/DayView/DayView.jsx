// DayView.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';
import format from 'date-fns/format';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';

const DayView = () => {
  const selectedDay = useSelector(state => state.calendar.currentDay);
  const events = useSelector(state => state.calendar.events);

  const formattedSelectedDay = format(selectedDay, 'yyyy-MM-dd');

  // Filtrer les événements pour ceux qui sont en cours pendant la date sélectionnée
  const dayEvents = events.filter(event => {
    const startDate = startOfDay(new Date(event.startDate));
    const endDate = endOfDay(new Date(event.endDate));
    return isWithinInterval(new Date(formattedSelectedDay), { start: startDate, end: endDate });
  });

  return (
    <Paper>
      <Typography variant="h4" component="h1" gutterBottom>
        {format(selectedDay, 'EEEE, MMMM d, yyyy')} {/* Affiche la date sélectionnée */}
      </Typography>
      {dayEvents.length > 0 ? (
        dayEvents.map((event, index) => (
          <div key={index}>
            <Typography variant="h6">{event.title}</Typography>
            <Typography>{event.comment}</Typography>
          </div>
        ))
      ) : (
        <Typography>No events for this day.</Typography>
      )}
    </Paper>
  );
};

export default DayView;

import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';
import format from 'date-fns/format';

const DayView = () => {
  // Utilisez useSelector pour accéder à l'état actuel du jour sélectionné à partir du store Redux.
  const selectedDay = useSelector(state => state.calendar.currentDay);

  // Formatez la date pour l'affichage, en utilisant la bibliothèque date-fns ou une autre de votre choix.
  const formattedDate = format(selectedDay, 'EEEE, MMMM d, yyyy');

  // Vous pouvez également sélectionner les événements du jour sélectionné si vous les avez stockés dans Redux.
  // const events = useSelector(state => state.calendar.events[selectedDay]);

  return (
    <Paper>
      <Typography variant="h4" component="h1" gutterBottom>
        {formattedDate} {/* Affiche la date sélectionnée */}
      </Typography>
      {/* Ici, vous afficherez les événements du jour sélectionné. */}
      {/* events.map(event => (
        <EventComponent key={event.id} {...event} />
      )) */}
    </Paper>
  );
};

export default DayView;

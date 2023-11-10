import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { Paper } from '@mui/material';
import { setCurrentDay } from '../../redux/actions.jsx'; // Assurez-vous d'avoir une action définie pour cela

const CalendarView = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector(state => state.calendar.currentDay); // Assurez-vous que le reducer est configuré pour cela

  const handleDayChange = (newDay) => {
    // Dispatch the new day value to the Redux store
    dispatch(setCurrentDay(newDay));
  };

  return (
    <Paper>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={selectedDay}
          onChange={handleDayChange}
          renderInput={(params) => <div {...params} />}
          // Ajoutez d'autres propriétés si nécessaire
        />
      </LocalizationProvider>
    </Paper>
  );
};

export default CalendarView;

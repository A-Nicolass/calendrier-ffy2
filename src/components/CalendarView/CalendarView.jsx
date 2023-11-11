import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { Paper } from '@mui/material';
import { setCurrentDay } from '../../redux/actions.jsx'; 
import '../CalendarView/CalendarView.css';

const CalendarView = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector(state => state.calendar.currentDay); 

  const handleDayChange = (newDay) => {
    dispatch(setCurrentDay(newDay));
  };

  return (
    <Paper className='calendar-view'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={selectedDay}
          onChange={handleDayChange}
          renderInput={(params) => <div {...params} />}
        />
      </LocalizationProvider>
    </Paper>
  );
};

export default CalendarView;

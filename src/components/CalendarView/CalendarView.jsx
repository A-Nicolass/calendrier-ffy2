import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentDay } from '../../redux/actions';
import './CalendarView.scss';

const CalendarView = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector(state => state.calendar.currentDay);
  const [currentMonth, setCurrentMonth] = useState(selectedDay.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDay.getFullYear());

  // Adjusting daysOfWeek to start from Sunday if needed
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // Helper functions
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  // Adjust the day when a date is clicked
  const handleDayClick = (day) => {
    dispatch(setCurrentDay(new Date(currentYear, currentMonth, day)));
  };

  // Change the month
  const changeMonth = (num) => {
    let newMonth = currentMonth + num;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  // Render header
  const renderHeader = () => {
    const monthAndYear = new Date(currentYear, currentMonth).toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });
    return (
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        <span>{monthAndYear}</span>
        <button onClick={() => changeMonth(1)}>&gt;</button>
      </div>
    );
  };

  // Render days of the week
  const renderDaysOfWeek = () => (
    <div className="calendar-days-of-week">
      {daysOfWeek.map((day, index) => (
        <div key={index} className="calendar-day-name">
          {day}
        </div>
      ))}
    </div>
  );

  // Render days in the month
  const renderDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

    // Create placeholders for the days before the first day of the month
    const offsetDays = Array.from({ length: firstDayOfMonth }, () => null);

    // Combine the offset days with the current month's days
    const days = [...offsetDays, ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

    return (
      <div className="calendar-days">
        {days.map((day, index) => (
          <div
            key={index}
            className={`day${day ? '' : ' offset'}${day === selectedDay.getDate() && currentMonth === selectedDay.getMonth() ? ' selected' : ''}`}
            onClick={() => day && handleDayClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="calendar-view">
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderDays()}
    </div>
  );
};

export default CalendarView;

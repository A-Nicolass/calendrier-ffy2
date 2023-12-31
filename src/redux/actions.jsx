// actions.js

export const setCurrentDay = (day) => ({
  type: 'SET_CURRENT_DAY',
  payload: day,
});

export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  payload: startDate,
});

export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  payload: endDate,
});

export const addEvent = (event) => ({
  type: 'ADD_EVENT',
  payload: event,
});

export const removeEvent = (eventId) => ({
  type: 'REMOVE_EVENT',
  payload: eventId,
});

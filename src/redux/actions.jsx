// actions.js
export const setCurrentDay = (day) => {
  return {
    type: 'SET_CURRENT_DAY',
    payload: day,
  };
};

export const setStartDate = (startDate) => {
  return {
    type: 'SET_START_DATE',
    payload: startDate,
  };
};

export const setEndDate = (endDate) => {
  return {
    type: 'SET_END_DATE',
    payload: endDate,
  };
};

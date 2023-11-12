// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialCalendarState = {
  currentDay: new Date(),
  events: [],
};

function calendarReducer(state = initialCalendarState, action) {
  switch (action.type) {
    case 'SET_CURRENT_DAY':
      return { ...state, currentDay: action.payload };
    case 'SET_START_DATE':
    
      return state;
    case 'SET_END_DATE':
     
      return state;
    case 'ADD_EVENT':
   
      return { ...state, events: [...state.events, action.payload] };
    case 'REMOVE_EVENT':
  
      return { ...state, events: state.events.filter(event => event.id !== action.payload) };
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  calendar: calendarReducer,
  
});


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk) 
  )
);

export default store;

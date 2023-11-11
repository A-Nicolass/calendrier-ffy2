// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducer pour gérer l'état du jour actuel sélectionné dans le calendrier et les événements
const initialCalendarState = {
  currentDay: new Date(),
  events: [],
};

function calendarReducer(state = initialCalendarState, action) {
  switch (action.type) {
    case 'SET_CURRENT_DAY':
      return { ...state, currentDay: action.payload };
    case 'SET_START_DATE':
      // Cette action peut être utilisée pour une logique supplémentaire si nécessaire
      return state;
    case 'SET_END_DATE':
      // Cette action peut être utilisée pour une logique supplémentaire si nécessaire
      return state;
    case 'ADD_EVENT':
      // Ajouter l'événement au tableau des événements
      return { ...state, events: [...state.events, action.payload] };
    default:
      return state;
  }
}

// Combine tous les reducers ici
const rootReducer = combineReducers({
  calendar: calendarReducer,
  // Ajoute d'autres reducers ici au besoin
});

// Crée le store avec le rootReducer et le middleware redux-thunk
// Utilise composeWithDevTools pour intégrer les outils de développement Redux
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk) // Ajoute d'autres middlewares ici si nécessaire
  )
);

export default store;

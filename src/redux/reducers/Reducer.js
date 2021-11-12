import {ActionTypes} from '../contants/action-types';

const initialState = {
  
} 
    

export const showweekdays = (state = initialState,action) =>{
  
  switch (action.type) {
    case ActionTypes.WEEKDAYS:
      return {...state,...action.payload}
      break;
  
    default:
      return state;
      break;
  }
}

export const showtimetable = (state = initialState,action) =>{
  
  switch (action.type) {
    case ActionTypes.GETTIMETABLE:
      return {...state,...action.payload}
      break;
  
    default:
      return state;
      break;
  }
}

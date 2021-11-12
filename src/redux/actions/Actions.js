import {ActionTypes} from '../contants/action-types'

export const weekDays=(item) => {

  return {
      type : ActionTypes.WEEKDAYS,
      payload : item,
  };
};
export const getTimeTable=(item) => {

  return {
      type : ActionTypes.GETTIMETABLE,
      payload : item,
  };
};
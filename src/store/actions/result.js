import * as actionsTypes from "./actionTypes";

export const saveResult = (res) => {
  return {
    type: actionsTypes.STORE_RESULT,
    result: res,
  };
};

export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (resultElId) => {
  return {
    type: actionsTypes.DELETE_RESULT,
    resultElId: resultElId,
  };
};

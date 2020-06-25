export const SET_VISIBILITY = 'SET_VISIBILITY';

export const setVisibility = (status) => {
  return {
    type: SET_VISIBILITY,
    status
  }
}
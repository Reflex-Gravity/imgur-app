export const SET_MSG = 'SET_MSG';


export function updateMsg(msg) {
  return {
    type: SET_MSG,
    msg,
  };
}

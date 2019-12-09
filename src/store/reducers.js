import * as Actions from './actions';

export default function reducers(state = { msg: 'hey redux is working' }, action) {
  switch (action.type) {
    case Actions.SET_MSG:
      return {
        ...state,
        msgs: action.msg,
      };
    default:
      return state;
  }
}

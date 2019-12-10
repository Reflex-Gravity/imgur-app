import * as Actions from './actions';

export default function reducers(state = null, action) {
  switch (action.type) {
    case Actions.SET_MSG:
      return {
        ...state,
        msgs: action.msg,
      };

    case Actions.UPLOAD_IMAGES:
      return {
        ...state,
        images: action.images,
      };

    case Actions.UPLOAD_IMAGE_DETAILS:
      return {
        ...state,
        imageDetail: action.images,
      };

    default:
      return state;
  }
}

export const SET_MSG = 'SET_MSG';
export const UPLOAD_IMAGES = 'UPLOAD_IMAGES';
export const UPLOAD_IMAGE_DETAILS = 'UPLOAD_IMAGE_DETAILS';


export function updateMsg(msg) {
  return {
    type: SET_MSG,
    msg,
  };
}

export function setImages(images) {
  return {
    type: UPLOAD_IMAGES,
    images,
  };
}

export function setImageDetails(images) {
  return {
    type: UPLOAD_IMAGE_DETAILS,
    images,
  };
}

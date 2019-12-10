import axios from 'axios';
import store from '../store';
import * as Actions from '../store/actions';
// const clientID = '43dadb06d03a566';

// axios.defaults.headers.common.Authorization = `Client-ID ${clientID}`;

export function fetchImages(section = 'hot', sort = 'viral', win = 'day', isViral = 'true') {
  const url = `https://api.imgur.com/3/gallery/${section}/${sort}/${win}/0?showViral=${isViral}`;

  const options = {
    url,
    headers: {
      Authorization: 'Client-ID 43dadb06d03a566',
    },
  };
  store.dispatch(Actions.setImages([]));
  axios(options)
    .then((response) => {
      const { data } = response;
      if (data.status === 200 && data.success === true) {
        store.dispatch(Actions.setImages(data.data));
      }
    });
}

export function fetchImageDetails(albumHash) {
  const url = `https://api.imgur.com/3/gallery/album/${albumHash}`;

  const options = {
    url,
    headers: {
      Authorization: 'Client-ID 43dadb06d03a566',
    },
  };

  axios(options)
    .then((response) => {
      const { data } = response;
      if (data.status === 200 && data.success === true) {
        store.dispatch(Actions.setImageDetails(data.data));
      }
    });
}

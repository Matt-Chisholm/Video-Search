import axios from 'axios';

const KEY = 'AIzaSyBwBeDLqwXAfFjRxERyN2IvNHC-Qzzp8lI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

import axios from 'axios';

export const searchMusic = (query) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/search?q=${query}`);
    dispatch({
      type: 'SEARCH_MUSIC',
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

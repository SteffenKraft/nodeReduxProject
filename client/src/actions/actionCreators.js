import axios from 'axios';

// temp
export const loadStores = () => (dispatch) => {
  dispatch({
    type: 'LOAD_TEST_START'
  });

  return axios('/api/stores')
    .then(
      response => {
        dispatch({
          type: 'LOAD_STORES',
          stores: response.data.stores
        })
      }
    )
}

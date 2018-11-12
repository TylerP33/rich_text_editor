import fetch from 'isomorphic-fetch';
export function fetchRecords() {

  return function (dispatch) {
    dispatch({ type: 'LOADING_RECORDS' })
    return fetch('http://localhost:3001/records')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({ type: 'FETCH_RECORDS', payload: responseJson.images })
      })
    // return cats;
  }
}
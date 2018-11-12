import fetch from 'isomorphic-fetch';

export function addRecords(record){
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({document: document})
  }
  return (dispatch) => {
    dispatch({type: 'ADD_RECORD'});
    return fetch('http://localhost:3001/documents', request)
      .then(response => response.json())
      .then(recordsResp => {
        dispatch({ type: 'SAVE_RECORD', payload: recordsResp })});
      }
  }

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
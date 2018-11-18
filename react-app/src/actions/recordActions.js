import fetch from 'isomorphic-fetch';

export function addNewRecord(editorStateJSONFormat) {
	const request = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json', "Accepts": "application/json"
		},
		body: JSON.stringify({body: editorStateJSONFormat})
	}

	return (dispatch) => {
		dispatch({type: 'PUSHING_RECORD'});
		return fetch('http://localhost:3001/api/v1/documents', request)
			.then(response => response.json())
			.then(recordResponse => {
				dispatch({type: 'ADD_RECORD', payload: recordResponse})
		});
	}
}

export function getRecord(record) {
	return (dispatch) => {
		dispatch({type: 'LOADING_RECORD'});
		return fetch('http://localhost:3001/api/v1/documents')
			.then(response => response.json())
			.then(recordsResponse => {
				dispatch({type: 'GET_RECORD', payload: recordsResponse})
		})
	}
}


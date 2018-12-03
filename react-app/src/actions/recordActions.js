import fetch from 'isomorphic-fetch';

export function addNewRecord(editorStateJSONFormat) {
	const request = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8', "Accepts": "application/json"
		},
		body: JSON.stringify({body: editorStateJSONFormat})
	}

	return (dispatch) => {
		dispatch({type: 'PUSHING_RECORD'});
		return fetch('http://localhost:3001/api/v1/documents', request)
			.then(response => response.json())
			.then(records => {
				dispatch({type: 'ADD_RECORD', payload: records})
		});
	}
}

export function getRecord() {
	return (dispatch) => {
		dispatch({type: 'LOADING_RECORD'});

		return fetch('http://localhost:3001/api/v1/documents', {method: 'GET'})
			.then(response => response.json())
			.then(records => dispatch({type: 'GET_RECORD', payload: records}));
		}
}

export function userSearch() {
	return (dispatch) => {
		dispatch({type: 'LOADING_RECORD'});

		return fetch('http://localhost:3001/api/v1/documents', {method: 'GET'})
			.then(response => response.json())
			.then(records => dispatch({type: 'GET_SEARCH_WORD', payload: records}));
		}
}



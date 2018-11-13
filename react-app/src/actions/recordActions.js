import fetch from 'isomorphic-fetch';

export function addNewRecord(record) {
	const text = record.blocks.map(function(block){
		return block.text
	})
	const request = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: text.join(" "),
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
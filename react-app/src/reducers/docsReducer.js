export default function manageDocuments(state = {loading: false,
	records: [],
}, action) {
	switch(action.type) {
		case 'PUSHING_RECORD':
			return {...state, loading: true}
		case "ADD_RECORD":
		const record = action.text;
		state = Object.assign({}, state, {
			displayedRecord: record
		})

		case "LOADING_RECORD"
			return {...state, loading: true}
		case "GET_RECORD"
			return {loading: false, records: action.records}

		default:
        return state
	}
};
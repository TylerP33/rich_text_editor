export default function manageDocuments(state = {loading: false,
}, action) {
	switch(action.type) {
		case 'PUSHING_RECORD':
			return {...state, loading: true}
		case "ADD_RECORD":
			return {...state, loading: false, records: action.payload}

		case "LOADING_RECORD":
			return {...state, loading: true}
		case "GET_RECORD":
			return {loading: false, ...state, records: action.payload}

		case "LOADING_RECORD":
			return {...state, loading: true}
		case "GET_USER_QUERY":
			return {loading: false, ...state, records: action.payload}

		default:
        	return {...state}
	}
};
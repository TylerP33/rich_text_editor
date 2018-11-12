export default function manageDocuments(state = {
	records: [],
}, action) {
	switch(action.type) {
		case "ADD_RECORD":
		const record = {editorState: action.text}
		return {
			...state, 
			records: [...state.records, record]
		}
	}
};
export default function manageDocuments(state = {
	docs: [],
}, action) {
	switch(action.type) {
		case "ADD_DOCUMENT":

		const doc = {editorState: action.text}

		return {
			...state, 
			docs: [...state.docs, doc]
		}
	}
};
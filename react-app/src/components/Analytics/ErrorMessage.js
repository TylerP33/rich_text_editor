import React from 'react';
import '../styles/WordToSentenceMatch.css'

const ErrorMessage = () => {
	// make sure to use ReactRouter to add a Routed Button back to WordToSentenceMatch component
	return <div>
				<h2 id="error">Sorry, that word does not exist in your document!</h2>
				<div id="error-button-container">
					<button style={{border: 'solid 2px #fdfdff'}} type="submit" value="Submit">Return Back to Search</button>
				</div>
			</div>
}

export default ErrorMessage
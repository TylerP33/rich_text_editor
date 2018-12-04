import React from 'react';
import '../styles/Home.css'
import idea from '../styles/home_pencil.jpg'

const Home = () => {
	return <div id="home-container">
			<h1>Online Text Editor</h1>
		<div id="image-container">
			<img id="image" src={idea} alt="fireSpot"/>
		</div>
	</div>
}

export default Home
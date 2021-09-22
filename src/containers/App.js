import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
	const [robots, setRobots] = useState([])
	const [searchField, setSearchfield] = useState('')

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users => {setRobots(users)});
	},[])

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)	
	}

	const filterRobots = robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})
		return !robots.length ?
		<h1>Loading...</h1> :
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<CardList robots={ filterRobots } />
				</Scroll>	
			</div>
		);
}


export default App;
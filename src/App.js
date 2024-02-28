import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokeCard from './components/content/PokeCard';
import PokeDetails from './components/content/PokeDetails';
import PokeTablePage from './components/content/PokeTablePage';
import Home from './components/Home';
import CardTest from './components/content/GetRandomPokeCard';




function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/poke-table' element={<PokeTablePage />} />
					<Route path='/poke-card' element={<PokeCard />} />
					<Route path='/poke-details-card' element={<PokeDetails />} />
					<Route path='/poke-random' element={<CardTest />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

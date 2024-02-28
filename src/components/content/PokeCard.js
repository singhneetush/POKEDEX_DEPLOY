import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PokeDetails from './PokeDetails';

const PokeCard = ({ getUrl }) => {
	const [dataCard, setDataCard] = useState([]);
	const [loading, setLoading] = useState(true);
	const [img, setImg] = useState('');
	const [pokeName, setPokeName] = useState('');
	const [searchId] = useSearchParams();
	const id = searchId.get('id');

	const currentPoke_url = `https://pokeapi.co/api/v2/pokemon/${getUrl}`;
	console.log('currentPoke_url : ', currentPoke_url);

	const getData = async () => {
		const response = await fetch(currentPoke_url);
		const data = await response.json();
		console.log('data : ', data);
		// console.log('data in pokeCard', data.abilities[0].ability.name);
		// console.log('data in pokecard', data.abilties);
		console.log('data in card is : ', data.abilities[0].ability.name);
		setDataCard(data.abilities);
		// console.log('hi');
		console.log('data.sprites.front_default: ', data.sprites.front_default);
		setImg(data.sprites.front_default);
		console.log(
			'data.abilities[0].ability.name ',
			data.abilities[0].ability.name
		);
		setPokeName(data.abilities[0].ability.name);
	};

	useEffect(() => {
		console.log('id from card details page : ', id);
		getData();
	}, []);

	return (
		<>
			{loading ? (
				<div>
					<Button onClick={getData}>check card</Button>
					<PokeDetails img={img} pokeName={pokeName} dataCard={dataCard} />
				</div>
			) : (
				<h2>Null</h2>
			)}
		</>
	);
};

export default PokeCard;

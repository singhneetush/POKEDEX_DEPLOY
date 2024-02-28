import React, { useState, useEffect } from 'react';
// import './App.css';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme, Button } from '@mui/material';
import TableIcons from './content/TableIcons';
import Skeleton from '@mui/material/Skeleton';
import PokeCard from './content/PokeCard';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export const initial_url = 'https://pokeapi.co/api/v2/pokemon/';

function PokeTable() {
	const defaultMaterialTheme = createTheme();

	// const [getUrl, setGetUrl] = useState('');
	const [pokeData, setPokeData] = useState([]);
	const [loading, setLoading] = useState(false);

	//data to be rendered is stored in the pokeData state variable

	const columns = [
		{ title: 'Name', field: 'name' },
		{
			title: 'Details',
			field: 'url',
			render: (rowData) => {
				const urlArr = rowData?.url?.split('/');
				const id = urlArr.at(-2);
				return (
					<Button
						color='error'
						variant='contained'
						component={Link}
						to={`/poke-details-card?id=${id}`}>
						Check Details
					</Button>
				);
			},
		},
	];

	const getApiData = async () => {
		setLoading(true);
		const response = await fetch(`${initial_url}?limit=${10000}&offset=${0}`);
		const data = await response.json();

		setPokeData(data.results);
		setLoading(false);
	};

	useEffect(() => {
		// console.log(id);
		getApiData();
	}, []);

	return (
		<>
			<Navbar />
			{loading ? (
				<Skeleton animation='wave' />
			) : (
				<div className='table-main'>
					<div className='poke-table-img home-bg'></div>
					<div className='poke-table'>
						<ThemeProvider theme={defaultMaterialTheme}>
							<MaterialTable
								sx={{ marginTop: '5em' }}
								title='Pokemon List'
								data={pokeData}
								columns={columns}
								icons={TableIcons}
							/>
						</ThemeProvider>
					</div>
				</div>
			)}
		</>
	);
}

export default PokeTable;

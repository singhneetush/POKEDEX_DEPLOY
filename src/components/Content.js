import { Paper, Typography } from '@mui/material';
import React from 'react';

const Content = () => {
	const [data, setData] = React.useState({});

	const getData = async () => {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
		const data = await response.json();
		setData(data);
		console.log(data);
	};
	React.useEffect(() => {
		console.log('card page rendered');
		getData();
	}, []);
	return (
		<>
			<div className='home-bg'>
				<Paper
					sx={{
						width: '20rem',
						height: '20rem',
						marginTop: '20rem',
						marginLeft: '10rem',
						padding: '20px',
						borderTopLeftRadius: '5rem',
						borderBottomRightRadius: '5rem',
					}}>
					<div style={{ margin: '6em'}}>
						<h3>Fact about this API : </h3>
						<div>The Api has {data.count} datasets </div>
					</div>
				</Paper>
			</div>
		</>
	);
};

export default Content;

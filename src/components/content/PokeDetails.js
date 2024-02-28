import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useSearchParams } from 'react-router-dom';
import { initial_url } from '../PokeTable';
import { Stack } from '@mui/system';
import { Chip, createTheme, ThemeProvider } from '@mui/material';
import Navbar from '../Navbar';
import Loader from './Loader';

export default function PokeDetails() {
	const [searchId] = useSearchParams();
	const [dataId, getDataId] = React.useState({});
	const [loading, setLoading] = React.useState(false);
	const id = searchId.get('id');

	const theme = createTheme({
		typography: {
			fontFamily: 'Preahvihear',
		},
	});
	const showDataById = async () => {
		console.log('id is :', id);
		setLoading(true);
		const response = await fetch(`${initial_url}${id}/`);
		const data = await response.json();
		console.log(data);
		getDataId(data);
		setLoading(false);
	};

	React.useEffect(() => {
		console.log(`${initial_url}${id}/`);
		showDataById();
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<div className='table-main'>
				<div className='poke-table-img home-bg' />
				{loading ? (
					<Loader />
				) : (
					<div className='poke-table'>
						<Card sx={{ width: '20rem', margin: '10em' }}>
							<Typography sx={{ marginLeft: '7rem', letterSpacing: '1px' }}>
								{dataId?.species?.name}
							</Typography>
							<Stack direction='row'>
								<CardMedia
									component='img'
									alt='...'
									image={dataId?.sprites?.front_shiny}
								/>

								<CardMedia
									component='img'
									alt='...'
									height='10%'
									image={dataId?.sprites?.back_shiny}
								/>
							</Stack>

							<div className='details-container'>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										<Stack>
											<h2>Abilities are : </h2>
											{dataId?.abilities?.map((ele) => (
												<>
													<Chip
														label={ele.ability.name}
														variant='outlined'
														component='h2'
														color='primary'
														sx={{ margin: '10px', padding: '10px' }}
													/>
												</>
											))}
										</Stack>
									</Typography>
								</CardContent>
								<Stack direction='column'>
									<Typography
										variant='h6'
										gutterBottom
										// component='h6'
										sx={{ color: 'green' }}>
										Height : {dataId?.height}
									</Typography>
									<Typography
										variant='h6'
										gutterBottom
										// component='h6'
										sx={{ color: 'green' }}>
										Weight : {dataId?.weight}
									</Typography>
								</Stack>
							</div>
						</Card>
					</div>
				)}
			</div>
		</ThemeProvider>
	);
}

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Navbar = () => {
	const theme = createTheme({
		typography: {
			fontFamily: 'Preahvihear',
		},
	});

	const marginStyles = {
		margin: '20px',
		padding: '10px',
	};

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2 }}>
							<MenuIcon />
						</IconButton>
						<Typography
							variant='h6'
							component={Link}
							to='/'
							sx={{
								flexGrow: 1,
								textDecoration: 'none',
								color: 'white',
								fontSize: '40px',
							}}>
							POKEDEX
						</Typography>
						<Button
							sx={marginStyles}
							color='error'
							variant='contained'
							component={Link}
							to='/poke-table'>
							Pokemon List
						</Button>
						<Button
							sx={marginStyles}
							color='error'
							variant='contained'
							component={Link}
							to='/poke-random'>
							Get Your Own Pokemon
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</ThemeProvider>
	);
};

export default Navbar;

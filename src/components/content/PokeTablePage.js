import { Stack } from '@mui/system';
import React, { useState, useEffect } from 'react';
import Example from '../PokeTable';
// import Left from './Left';
import PokeCard from './PokeCard';

const PokeTablePage = () => {
	return (
		<div>
			<Stack>
				<Example />
			</Stack>
		</div>
	);
};

export default PokeTablePage;

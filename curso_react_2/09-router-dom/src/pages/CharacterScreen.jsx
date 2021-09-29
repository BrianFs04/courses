import React from 'react';
import { useParams } from 'react-router';
import { Characters } from '../models/Characters';

const CharacterScreen = ({ history }) => {
	const { id } = useParams();
	const { type, name, description } = Characters.find(
		(character) => character.id === id
	);
	const path = `/assets/${type}-${id}.png`;
	const handleBack = () => {
		history.goBack();
	};

	return (
		<div className='container mt-5 row'>
			<div className='col-8'>
				<img
					className='img-thumbnail'
					src={path}
					alt={id}
					style={{ width: '70%', height: '400px' }}
				/>
			</div>
			<div className='col-4'>
				<h2>Nombre: {name}</h2>
				<p>Descripción: {description}</p>
				<button
					className='btn btn-outline-warning'
					onClick={handleBack}
				>
					Go back
				</button>
			</div>
		</div>
	);
};

export default CharacterScreen;

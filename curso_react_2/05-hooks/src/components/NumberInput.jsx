import React, { useState } from 'react';
import Resultado from './Resultado';
import { operaciones } from '../helpers/operaciones';

const NumberInput = () => {
	const [numeros, setNumeros] = useState({
		numero1: 0,
		numero2: 0,
	});

	const { handleChange, suma, resta, multi, div, numero1, numero2 } =
		operaciones(numeros, setNumeros);

	return (
		<>
			<label>
				Número 1:{''}
				<input
					name='numero1'
					value={numero1}
					onChange={handleChange}
					type='number'
				/>
			</label>
			<br />
			<label className='mt-3'>
				Número 2:{''}
				<input
					name='numero2'
					value={numero2}
					onChange={handleChange}
					type='number'
				/>
			</label>

			<Resultado operacion='Suma' calculo={suma()} />
			<Resultado operacion='Resta' calculo={resta()} />
			<Resultado operacion='Multiplicación' calculo={multi()} />
			<Resultado operacion='División' calculo={div()} />
		</>
	);
};

export default NumberInput;

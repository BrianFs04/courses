export const operaciones = (numeros, setNumeros) => {
	const { numero1, numero2 } = numeros;
	const handleChange = (e) => {
		setNumeros({
			...numeros,
			[e.target.name]: parseFloat(e.target.value),
		});
	};

	const suma = () => numero1 + numero2;
	const resta = () => numero1 - numero2;
	const multi = () => numero1 * numero2;
	const div = () => {
		if (numero2 === 0) {
			return 0;
		}
		return numero1 / numero2;
	};

	return { handleChange, suma, resta, multi, div, numero1, numero2 };
};

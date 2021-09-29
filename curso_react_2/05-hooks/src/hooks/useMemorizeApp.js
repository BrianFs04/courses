import React, { useCallback, useMemo, useState } from 'react';

const useMemorizeApp = () => {
	const [counter, setCounter] = useState(10);
	const [view, setView] = useState(true);

	const increment = useCallback(() => {
		setCounter((current) => current + 1);
	}, [setCounter]);

	const decrement = useCallback(() => {
		setCounter((current) => current - 1);
	}, [setCounter]);

	const pesado = (iter) => {
		for (let i = 0; i < iter; i++) {
			console.log('procesando');
		}
		return 'Fin del proceso'
	};

	const pesadoMemo = useMemo(() => pesado(counter), [counter]);

	const hide = () => setView(!view);

	return [counter, increment, decrement, pesadoMemo, hide];
};

export default useMemorizeApp;

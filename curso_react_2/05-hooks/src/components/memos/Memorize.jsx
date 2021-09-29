import { useMemo } from 'react';
import Dato from './Dato';
import Btn from './Btn';
import useMemorizeApp from '../../hooks/useMemorizeApp';

const Memorize = () => {
	const [contador, increment, decrement, pesadoMemo, hide] = useMemorizeApp();

	return (
		<>
			<h1>
				Memorizes: <Dato value={contador} />
			</h1>
			<hr />
			<pre>{pesadoMemo}</pre>
			<Btn funcion={increment} texto={'+1'} />
			<Btn funcion={decrement} texto={'-1'} />
			<br />
			<button onClick={hide}>Ver/Quitar</button>
		</>
	);
};

export default Memorize;

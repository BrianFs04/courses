import { memo } from 'react';

const Btn = ({ funcion, texto }) => {
	console.log('Aumentar');
	return <button onClick={funcion}>{texto}</button>;
};

export default memo(Btn);

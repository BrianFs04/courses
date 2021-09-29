const cartaPostres = (postre: string, ...frutas: string[]): void => {
	console.log(`El postre es ${postre} y tiene ${frutas}`);
};

const test = ['x', 'c', 'a'];

const test2 = test.slice(0, test.length - 1);
const test3 = [...test2, 'y', test[test.length - 1]];

const test4 = test3.join(', ');

cartaPostres('Ponqué', test4);

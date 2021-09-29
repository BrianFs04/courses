const peticion = async () => {
	const { data } = await axios.get(
		'https://jsonplaceholder.typicode.com/users/3'
	);
	return data;
};

peticion().then(console.log);

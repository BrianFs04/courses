import { useCallback, useEffect, useState } from 'react';

const useFetchImages = () => {
	const [images, setImages] = useState([]);
	const [input, setInput] = useState('');
	const [loading, setLoading] = useState(true);

	const peticion = useCallback(async () => {
		const key = 'client_id=YvtOZ0EAmcnilEejVJyGmgq88ApatE22XQiN2XhRmCM';
		let url;

		if (input) {
			url = `https://api.unsplash.com/search/photos/?query=${encodeURI(
				input
			)}&?per_page=50&${key}`;
		} else {
			url = `https://api.unsplash.com/photos/?${key}`;
		}

		setLoading(true);
		const res = await fetch(url);
		const data = await res.json();

		if (data.results) {
			setImages(data.results);
		} else {
			setImages(data);
		}

		setLoading(false);
	}, [input]);

	useEffect(() => {
		peticion();
	}, [peticion]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const text = e.target[0].value;
		setInput(text);
	};

	return [images, loading, handleSubmit];
};

export default useFetchImages;

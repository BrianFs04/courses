import Card from './Card';
import Loading from './Loading';
import FormImg from './FormImg';
import useFetchImages from '../hooks/useFetchImages';

const Cards = () => {
	const [images, loading, handleSubmit] = useFetchImages();

	return (
		<div className='text-center'>
			<FormImg handleSubmit={handleSubmit} />
			<hr />
			{loading && <Loading />}
			<div className='row'>
				{images.map((img) => (
					<div key={img.id} className='col'>
						<Card img={img.urls.regular} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Cards;

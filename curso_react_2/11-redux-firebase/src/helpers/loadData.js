import { db } from '../firebase/config-firebase';

export const loadData = async (uid) => {
	const response = await db.collection(`${uid}/nominas/nomina`).get();
	const data = [];

	// Este forEach es un metodo de firestore
	response.forEach((nomina) => {
		const nominaData = nomina.data();
		data.push({
			id: nomina.id,
			...nominaData,
		});
	});

	return data;
};

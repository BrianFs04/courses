export const ContactosReducer = (state, action) => {
	console.log(state);
	switch (action.type) {
		case 'add':
			return [...state, action.payload];
		case 'delete':
			return state.filter((actual) => actual.id !== action.payload);
		default:
			console.log(state);
			return state;
	}
};

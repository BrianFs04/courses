import React, { useState } from 'react';
import { UserContext } from './contexts/UserContext';
import AppRouter from './routes/AppRouter';

const App = () => {
	const [user, setUser] = useState(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<AppRouter />
		</UserContext.Provider>
	);
};

export default App;

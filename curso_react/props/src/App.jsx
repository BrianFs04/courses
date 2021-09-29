import "./App.css";
import Cards from "./components/Cards";
function App() {
	return (
		<div className="App">
			<h1>Propiedades de los componentes</h1>
			<div className="container d-flex mt-5 justify-content-around">
				<div>
					<Cards
						imagen="https://via.placeholder.com/150"
						titulo="Card 1"
						texto="Texto de la card 1"
					/>
				</div>
				<div>
					<Cards
						imagen="https://via.placeholder.com/150"
						titulo="Card 2"
						texto="Texto de la card 2"
					/>
				</div>
				<div>
					<Cards
						imagen="https://via.placeholder.com/150"
						titulo="Card 3"
						texto="Texto de la card 3"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;

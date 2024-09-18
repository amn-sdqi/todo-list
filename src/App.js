import Navbar from "./nav";
import Home from "./home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;

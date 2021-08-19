import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import Login from "./components/Login/Login";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' children={<Home />} />
				<Route path='/login' children={<Login />} />
			</Switch>
		</Router>
	);
}

export default App;

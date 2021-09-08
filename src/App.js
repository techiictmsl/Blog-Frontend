import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Article from "./components/ArticlePage/Articleview";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' children={<Home />} />
				<Route path='/login' children={<Login />} />
				<Route path='/article/:id' children={<Article />} />
			</Switch>
		</Router>
	);
}

export default App;

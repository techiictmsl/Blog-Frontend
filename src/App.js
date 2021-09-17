import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardAndProfile from "./components/dashboard/DashboardAndProfile";
import Admin from "./components/Admin/Admin";
import Home from "./components/LandingPage/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Article from "./components/ArticlePage/Articleview";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/login" children={<Login />} />
        <Route path="/signup" children={<Signup />} />
        <Route path="/profile" children={<DashboardAndProfile />} />
        <Route path="/admin" children={<Admin />} />
        <Route path="/article/:id" children={<Article />} />
      </Switch>
    </Router>
  );
}

export default App;

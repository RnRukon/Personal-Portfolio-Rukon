import './App.css';
import "tailwindcss/tailwind.css"
import "@material-tailwind/react/tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolios from './pages/Portfolios/Portfolios';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <div className="md:ml-64">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/aboutMe">
              <AboutMe></AboutMe>
            </Route>
            <Route path="/skills">
              <Skills></Skills>
            </Route>
            <Route path="/portfolio">
              <Portfolios></Portfolios>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>

    </>
  );
}

export default App;

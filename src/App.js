import logo from "./logo.svg";
import "./App.css";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import {
  Route,Link,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

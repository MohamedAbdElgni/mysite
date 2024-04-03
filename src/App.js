import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
//import Header from './pages/Header';
import Header from "./pages/header/Header";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="App ">
      <Header />

      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

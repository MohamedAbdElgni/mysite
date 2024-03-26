import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
//import Header from './pages/Header';
import Header from "./pages/header/Header";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <div className="App bg-dark">
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;

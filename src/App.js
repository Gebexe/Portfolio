import './App.css';
import { Navigation } from './components/navigation/navigation';
import { Projects } from './components/projects/Projects';
import About from './components/about/about';

function App() {
  return (
    <>
    <Navigation />
    <About/>
    <Projects/>
    </>
  );
}

export default App;

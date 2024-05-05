import './App.css';
import './font.css';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
// import Graph from './graph/graph.js';
import Home from './home/home.js';
import Travel from './travel/travel.js';

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <div className="content">
      <Travel/>
    </div>
  );
}

export default App;

import './App.css';
import './font.css';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import Graph from './graph/graph.js';

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <div className="content">
      <Graph/>
    </div>
  );
}

export default App;

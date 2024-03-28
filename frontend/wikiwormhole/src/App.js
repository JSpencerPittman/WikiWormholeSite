import './App.css';
import './font.css';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import Home from './home/home.js';

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <div className="content">
      <Home/>
    </div>
  );
}

export default App;

import './App.css';
import './font.css';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import Form from './form/form.js';

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <div className="content">
      <Form/>
    </div>
  );
}

export default App;

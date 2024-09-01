import logo from './logo.svg';
import './App.css';
import './styles/index.scss';
import './i18n.js'

import { LoremIpsum } from './components/LoremIpsum';
import { motion, useScroll } from "framer-motion";
import { Intro } from './components/Intro';
import { TechnicalSpecs } from './components/TechnicalSpecs';
import { CV } from './components/CV.js';

function App() {

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <Intro />

      <div style={{height: '15vh'}}></div>

      <TechnicalSpecs />

      <div style={{height: '15vh'}}></div>

      <CV />

      <h1>
        <code>useScroll</code> demo
      </h1>

      <LoremIpsum />
    </>
  );
}

export default App;

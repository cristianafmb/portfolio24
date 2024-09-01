import { BrowserView, MobileView } from 'react-device-detect';

import './App.css';
import './styles/index.scss';
import './i18n.js'
import { motion, useScroll } from "framer-motion";
import { Intro } from './components/Intro';
import { TechnicalSpecs } from './components/TechnicalSpecs';
import { CV } from './components/CV';
import { CVMobile } from './components/CVMobile';
import { GetInTouch } from './utils/svgs.js';

function App() {

  const { scrollYProgress } = useScroll();

  return (
    <>

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <Intro />

      <div style={{ height: '15vh' }}></div>

      <TechnicalSpecs />

      <div style={{ height: '15vh' }}></div>

      <BrowserView>
        <CV />
      </BrowserView>

      <MobileView>
        <GetInTouch />
      </MobileView>

    </>
  );
}

export default App;

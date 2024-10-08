import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import '../styles/homepage/CV.scss'
import { Step1 } from "./steps/step1";
import { Step2 } from "./steps/step2";
import { Step3 } from "./steps/step3";
import { Step4 } from "./steps/step4";
import { Step5 } from "./steps/step5";

export function CV() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const [hookedYPostion, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  })


  return (
    <>
     {/**  <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>

      <div className="position-fixed" style={{ top: 0 }}>{scrollYProgress.current}</div>
      */}
      <div className='container-cv position-relative' ref={ref}>
        <div className={(scrollYProgress.current >= 0.001) ? "container-cv-inner position-fixed" : "container-cv-inner position-absolute"}>

          <Step1 scroll={scrollYProgress.current} />
          <Step2 scroll={scrollYProgress.current} />
          <Step3 scroll={scrollYProgress.current} />
          <Step4 scroll={scrollYProgress.current} />
          <Step5 scroll={scrollYProgress.current} />
          {/**(() => {
            switch (step) {
            }
          })()
          **/}
        </div>
      </div>
    </>
  );
}

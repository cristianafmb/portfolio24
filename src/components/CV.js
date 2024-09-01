import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import '../styles/homepage/CV.scss'
import { Step1 } from "./steps/step1";
import { Step2 } from "./steps/step2";
import { Step3 } from "./steps/step3";
import { Step4 } from "./steps/step4";

export function CV() {

  const [step, setStep] = useState(1)

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const [hookedYPostion, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    if (scrollYProgress.current > 0 && scrollYProgress.current <= 0.2) setStep(1)
    else if (scrollYProgress.current > 0.2 && scrollYProgress.current <= 0.4) setStep(2)
    else if (scrollYProgress.current > 0.4 && scrollYProgress.current <= 0.6) setStep(3)
    else if (scrollYProgress.current > 0.6 && scrollYProgress.current <= 0.8) setStep(4)
    else if (scrollYProgress.current > 0.8 && scrollYProgress.current <= 1) setStep(5)

    setHookedYPosition(latest);
  })


  return (
    <>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
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
      <div className="position-fixed" style={{ top: 0 }}>{ scrollYProgress.current }</div>
      <div className='container-cv position-relative' ref={ref}>
        <div className={(scrollYProgress.current>= 0.001) ? "container-cv-inner position-fixed" : "container-cv-inner position-absolute"}>     
          {/**(() => {
            switch (step) {
            }
          })()**/}
          <Step1 scroll={scrollYProgress.current} />
          <Step2 scroll={scrollYProgress.current} />
          <Step3 scroll={scrollYProgress.current} />
          <Step4 scroll={scrollYProgress.current} />
        </div>
      </div>
    </>
  );
}

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { Step1Mobile } from "./steps/step1Mobile";
import { Step2Mobile } from "./steps/step2Mobile";
import { Step3Mobile } from "./steps/step3Mobile";
import { Step4Mobile } from "./steps/step4Mobile";
import { Step5Mobile } from "./steps/step5Mobile";

export function CVMobile() {

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

      <div className="position-fixed" style={{ top: 0 }}>{scrollYProgress.current}</div>


      <div className='container-cv position-relative' ref={ref}>
        <div className={(scrollYProgress.current >= 0.001) ? "container-cv-inner position-fixed" : "container-cv-inner position-absolute"}>

          <Step1Mobile scroll={scrollYProgress.current} />
          <Step2Mobile scroll={scrollYProgress.current} />
          <Step3Mobile scroll={scrollYProgress.current} />
          <Step4Mobile scroll={scrollYProgress.current} />
          <Step5Mobile scroll={scrollYProgress.current} />

        </div>
      </div>
    </>
  );
}

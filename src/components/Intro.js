import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next";

import '../styles/homepage/intro.scss'


export function Intro() {

  const { t } = useTranslation();
  
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) {
      setInterval(() => {
        setShow(true)
      }, 24500);
    }
  }, []);

  return (
    <div className="container-margin  d-grid text-center">

      <div className="container-intro-top d-grid text-center">
        <div className='container-intro-top-inner fs-4'>
          <h1 className='fs-1'>Hi</h1>
          <TypeAnimation
            sequence={[
              '',
              200, // Waits 2s
              t("firstQuestion"),
              2000, // Waits 2s
              t("secondQuestion"),
              2000, // Waits 2s
              t("thirdQuestion"),
              2000, // Waits 2s
              t("fourthQuestion"),
            ]}
            wrapper="p"
            cursor={true}
            repeat={0}
            style={{ display: 'inline-block' }}
            className='h5'
          />
        </div>
      </div>

      <div className="container-intro-bottom d-grid text-center">
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <svg fill="#fff" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330" xmlSpace="preserve">
                <g id="XMLID_169_">

                  <path id="top" d="M304.394,139.394l-139.39,139.393L25.607,139.393c-5.857-5.857-15.355-5.858-21.213,0.001
		c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150
		c5.858-5.858,5.858-15.355,0-21.213C319.749,133.536,310.251,133.535,304.394,139.394z"/>

                  <path id="bottom" d="M154.398,190.607c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150
		c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-139.39,139.393L25.607,19.393
		c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L154.398,190.607z"/>

                </g>


              </svg>
              <p className='mt-2'>scroll</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

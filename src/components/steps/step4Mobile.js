import { motion } from "framer-motion"
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import Invisual from '../../assets/images/invisual.jpg'

export function Step4Mobile(scroll) {

    const { t } = useTranslation();

    return (
        <div className="container-step step4 d-flex w-100vw" >
            <Col sm="12" md="4" lg="4">
                <div className="container-margin mr-2 container-left-step">
                    {(scroll?.scroll >= 0.58 && scroll?.scroll < 0.79) &&
                        <motion.div
                            initial={{ opacity: 1, translateY: '100vh', position: 'relative', zIndex: '10' }}
                            animate={{
                                opacity: scroll?.scroll >= 0.58 && scroll?.scroll < 0.79 ? 1 : 0,
                                translateY: (scroll?.scroll >= 0.58 && scroll?.scroll <= 0.65) ? ((scroll?.scroll * -10) + 'vh') :
                                (scroll?.scroll >= 0.74 && scroll?.scroll <= 0.79) ? ((scroll?.scroll * -150) + 'vh') :
                                 '0vh'
                            }}
                            exit={{ opacity: 0, translateY: '100vh' }}
                        >
                            <h2 className="fs-2 mb-2">{t("step4Title")}</h2>
                            <h6 className="fs-6 mb-3">{t("step4Subtitle")}</h6>
                            <p>{t("step4Text")}</p>
                        </motion.div>
                    }

                </div>
            </Col>
            <Col sm="12" md="8" lg="8" className="position-relative overflow-hidden">
                {(scroll?.scroll >= 0.48 && scroll?.scroll < 0.79) &&
                    <motion.div
                        initial={{
                            opacity: 1, translateX: '0vw', position: 'relative', zIndex: '6', scale: '1',
                              height: '100vh', width: '100%'
                        }}
                        animate={{
                            scale: scroll?.scroll >= 0.7 && scroll?.scroll < 0.79 ? (1 - scroll?.scroll) : 1,
                            translateX: (scroll?.scroll >= 0.75 && scroll?.scroll < 0.79) ? ((scroll?.scroll * 100) + 'vw') : '0vw',
                            opacity: (scroll?.scroll >= 0.78) ? 0 : 1
                        }}
                        exit={{ scale: 1, translateX: '100vw', zIndex: '-10' }}
                        className="container-invisual"
                    >
                        <img src={Invisual} alt="Invisual" id="invisual" />
                    </motion.div>
                }
            </Col>
        </div>
    );
}

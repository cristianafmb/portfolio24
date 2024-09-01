import { motion } from "framer-motion"
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import CV from '../../assets/images/cv.png'

export function Step1(scroll) {

    const { t } = useTranslation();

    return (
        <div className="container-step step1 d-flex w-100vw" >
            <Col sm="12" md="4" lg="4">
                <div className="container-margin mr-2 container-left-step">
                    {(scroll?.scroll >= 0 && scroll?.scroll < 0.19) &&
                        <motion.div
                            initial={{ opacity: 1, translateY: '-100vh', position: 'relative', zIndex: '10' }}
                            animate={{
                                opacity: scroll?.scroll >= 0 && scroll?.scroll < 0.18 ? 1 : 0,
                                translateY: (scroll?.scroll >= 0.14 && scroll?.scroll <= 0.19) ? ((scroll?.scroll * -800) + 'vh') : '0vh'
                            }}
                            exit={{ opacity: 0 }}
                        >
                            <h2 className="fs-2 mb-2">{t("step1Title")}</h2>
                            <h6 className="fs-6">{t("step1Subtitle")}</h6>
                        </motion.div>
                    }

                </div>
            </Col>
            <Col sm="12" md="8" lg="8" className="position-relative overflow-hidden">

                {(scroll?.scroll >= 0 && scroll?.scroll < 0.18) &&
                    <motion.div
                        initial={{ opacity: 1, translateX: '15vw', position: 'relative', zIndex: '10' }}
                        animate={{
                            opacity: scroll?.scroll >= 0 && scroll?.scroll < 0.18 ? 1 : 0,
                            translateX: (scroll?.scroll >= 0.15 && scroll?.scroll < 0.18) ? ((scroll?.scroll * 700) + 15 + 'vw') : '15vw'
                        }}
                        exit={{ opacity: 0, translateX: '100vw', zIndex: '-10' }}
                    >
                        <img src={CV} alt="curriculum" id="cv" />
                    </motion.div>
                }
            </Col>
        </div>
    );
}

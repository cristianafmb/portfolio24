import { motion } from "framer-motion"
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import HCPro from '../../assets/images/hcpro.jpg'

export function Step3Mobile(scroll) {

    const { t } = useTranslation();

    return (
        <div className="container-step step3 d-flex w-100vw" >
            <Col sm="12" md="4" lg="4">
                <div className="container-margin mr-2 container-left-step">
                    {(scroll?.scroll >= 0.38 && scroll?.scroll < 0.59) &&
                        <motion.div
                            initial={{ opacity: 1, translateY: '100vh', position: 'relative', zIndex: '10' }}
                            animate={{
                                opacity: scroll?.scroll >= 0.37 && scroll?.scroll < 0.59 ? 1 : 0,
                                translateY: (scroll?.scroll >= 0.37 && scroll?.scroll <= 0.45) ? ((scroll?.scroll * -10) + 'vh') :
                                (scroll?.scroll >= 0.54 && scroll?.scroll <= 0.59) ? ((scroll?.scroll * -200) + 'vh') :
                                 '0vh'
                            }}
                            exit={{ opacity: 0 }}
                        >
                            <h2 className="fs-2 mb-2">{t("step3Title")}</h2>
                            <h6 className="fs-6 mb-3">{t("step3Subtitle")}</h6>
                            <p>{t("step3Text")}</p>
                        </motion.div>
                    }

                </div>
            </Col>
            <Col sm="12" md="8" lg="8" className="position-relative overflow-hidden">
                {(scroll?.scroll >= 0.35 && scroll?.scroll < 0.59) &&
                    <motion.div
                        initial={{
                            opacity: 1, translateX: '0vw', position: 'relative', zIndex: '7', scale: '1',
                              height: '100vh', width: '100%'
                        }}
                        animate={{
                            scale: scroll?.scroll >= 0.49 && scroll?.scroll < 0.57 ? (1 - (scroll?.scroll/1)) : 1,
                            translateX: (scroll?.scroll >= 0.55 && scroll?.scroll < 0.59) ? ((scroll?.scroll * 150) + 'vw') : '0vw'
                        }}
                        exit={{ scale: 1, translateX: '100vw', zIndex: '-10' }}
                        className="container-ufp"
                    >
                        <img src={HCPro} alt="HCPro" id="hcpro" />
                    </motion.div>
                }
            </Col>
        </div>
    );
}

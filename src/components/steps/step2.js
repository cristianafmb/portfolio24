import { motion } from "framer-motion"
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import UFP from '../../assets/images/fernando_pessoa_university.jpg'

export function Step2(scroll) {

    const { t } = useTranslation();

    return (
        <div className="container-step step2 d-flex w-100vw" >
            <Col sm="12" md="4" lg="4">
                <div className="container-margin mr-2 container-left-step">
                    {(scroll?.scroll >= 0.16 && scroll?.scroll < 0.39) &&
                        <motion.div
                            initial={{ opacity: 1, translateY: '100vh', position: 'relative', zIndex: '10' }}
                            animate={{
                                opacity: scroll?.scroll >= 0.16 && scroll?.scroll < 0.38 ? 1 : 0,
                                translateY: (scroll?.scroll >= 0.18 && scroll?.scroll <= 0.25) ? ((scroll?.scroll * -25) + 'vh') :
                                (scroll?.scroll >= 0.34 && scroll?.scroll <= 0.39) ? ((scroll?.scroll * -250) + 'vh') :
                                 '0vh'
                            }}
                            exit={{ opacity: 0, translateY: '100vh' }}
                        >
                            <h2 className="fs-2 mb-2">{t("step2Title")}</h2>
                            <h6 className="fs-6 mb-3">{t("step2Subtitle")}</h6>
                            <p>{t("step2Text")}</p>
                        </motion.div>
                    }

                </div>
            </Col>
            <Col sm="12" md="8" lg="8" className="position-relative overflow-hidden">
                {(scroll?.scroll >= 0 && scroll?.scroll < 0.39) &&
                    <motion.div
                        initial={{
                            opacity: 1, translateX: '0vw', position: 'relative', zIndex: '9', scale: '1',
                            height: '100vh', width: '100%'
                        }}
                        animate={{
                            scale: scroll?.scroll >= 0.26 && scroll?.scroll < 0.39 ? (scroll?.scroll + 1.2) : 1,
                            translateX: (scroll?.scroll >= 0.35 && scroll?.scroll < 0.39) ? ((scroll?.scroll * 300) + 15 + 'vw') : '0vw'
                        }}
                        exit={{ opacity: 0, translateX: '100vw', zIndex: '-10' }}
                        className="container-ufp"
                    >
                        <img src={UFP} alt="Fernando Pessoa University" id="ufp" />
                    </motion.div>
                }
            </Col>
        </div>
    );
}

import { motion } from "framer-motion"
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { GetInTouch } from "../../utils/svgs";

export function Step5(scroll) {

    const { t } = useTranslation();

    return (
        <div className="container-step step5 d-flex w-100vw" >

            <Col sm="12" md="12" lg="12" className="position-relative overflow-hidden container-step5-inner">

                {(scroll?.scroll >= 0.78) &&
                    <motion.div
                        initial={{
                            opacity: 1, translateX: '0vw', position: 'relative', zIndex: '6', scale: '1',
                            height: '0vh', width: '100%'
                        }}
                        animate={{
                            height: '50vh'
                        }}
                        exit={{ scale: 1,  zIndex: '-10' }}
                        className="container-get-in-touch"
                    >
                        <GetInTouch />

                    </motion.div>
                }
            </Col>
        </div>
    );
}

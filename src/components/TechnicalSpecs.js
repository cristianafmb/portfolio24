import { Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

import '../styles/homepage/technical_specs.scss'
import JSIcon from '../assets/images/javascript.png'
import ReactICon from '../assets/images/react.png'
import JqueryIcon from '../assets/images/jquery.png'
import NodeIcon from '../assets/images/node.svg'
import PHPIcon from '../assets/images/php.png'
import LaravelIcon from '../assets/images/laravel.png'
import GitIcon from '../assets/images/git.png'
import GraphqlIcon from '../assets/images/graphql.png'
import PostmanIcon from '../assets/images/postman.png'
import ReduxIcon from '../assets/images/redux.webp'
import WordpressIcon from '../assets/images/wordpress.png'
import APIIcon from '../assets/images/api.png'
import PythonIcon from '../assets/images/python.svg'

export function TechnicalSpecs() {

    const { t } = useTranslation();

    const icons = [
        {
            "icon": JSIcon,
            "text": "Javascript"
        },
        {
            "icon": ReactICon,
            "text": "React"
        },
        {
            "icon": JqueryIcon,
            "text": "Jquery"
        },
        {
            "icon": NodeIcon,
            "text": "Node.js"
        },
        {
            "icon": PHPIcon,
            "text": "PHP"
        },
        {
            "icon": LaravelIcon,
            "text": "Laravel"
        },
        {
            "icon": GitIcon,
            "text": "Git"
        },
        {
            "icon": GraphqlIcon,
            "text": "Graphql"
        },
        {
            "icon": PostmanIcon,
            "text": "Postman"
        },
        {
            "icon": ReduxIcon,
            "text": "Redux"
        },
        {
            "icon": WordpressIcon,
            "text": "Wordpress"
        },
        {
            "icon": APIIcon,
            "text": "API"
        },
        {
            "icon": PythonIcon,
            "text": "Python"
        },
    ]

    return (
        <div className="container-margin">
            <div className='mt-5'>
                <Row className='justify-content-around'>
                    <Col sm="12" md="5" lg="5">
                        <h1 className='display-3'>{t("job")}</h1>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                        <p className=' line-height-16' dangerouslySetInnerHTML={{ __html: t("passion") }} />
                    </Col>
                </Row>
                <Row className='container-icons mt-5 mb-2'>
                    {icons.map((item) => (
                        <div className='container-each-icons'>
                            <img src={item.icon} alt={item.text} />
                        </div>
                    ))}
                </Row>
                <Row>
                    <p className='fs-6 m-auto text-center opacity-50'>{t("more")}</p>
                </Row>
            </div>
        </div>
    );
}

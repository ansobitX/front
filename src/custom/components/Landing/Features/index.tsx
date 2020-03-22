import * as React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import VisibilitySensor from 'react-visibility-sensor';

/* Icons */
const ReliableImage = require('../../../assets/images/landing/features/Reliable.png');
const EfficientImage = require('../../../assets/images/landing/features/Efficient.png');
const ManagementImage = require('../../../assets/images/landing/features/Management.png');
const MeticulousImage = require('../../../assets/images/landing/features/Meticulous.png');
const CheckIcon = require('../../../assets/images/landing/features/Check.svg');

interface OwnProps {
    changeRoute: (isVisible: boolean, route: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

// tslint:disable-next-line: no-default-export
export default class LandingFeatures extends React.Component<Props> {
    public render() {
        const { changeRoute, translate } = this.props;

        return (
            <ScrollableAnchor id={'features'}>
                <VisibilitySensor onChange={e => changeRoute(e, 'features')} partialVisibility={true}>
                    <div className="pg-landing-screen__features">
                        <div className="pg-landing-screen__features__wrap">
                            <div
                                className="pg-landing-screen__features__wrap__animation-wrap"
                                data-aos="fade-down"
                                data-aos-duration="1000"
                                data-aos-offset="100"
                            >
                                <h1>{translate('page.body.landing.features.title')}</h1>
                                <h2>{translate('page.body.landing.features.subtitle')}</h2>
                            </div>
                            <div className="pg-landing-screen__features__wrap__blocks">
                                <div className="pg-landing-screen__features__wrap__blocks__item">
                                    <div
                                        className="pg-landing-screen__features__wrap__blocks__item__image"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-offset="100"
                                    >
                                        <img src={ReliableImage} alt="Reliable"/>
                                    </div>
                                    <div
                                        className="pg-landing-screen__features__wrap__blocks__item__content"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                        data-aos-offset="100"
                                    >
                                        <span className="title">{translate('page.body.landing.features.reliable.title')}</span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.reliable.text1')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.reliable.text2')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.reliable.text3')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.reliable.text4')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.reliable.text5')}</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="pg-landing-screen__features__wrap__blocks__item">
                                    <div
                                        className="pg-landing-screen__features__wrap__blocks__item__image"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-offset="100"
                                    >
                                        <img src={EfficientImage} alt="Efficient"/>
                                    </div>
                                    <div
                                        className="pg-landing-screen__features__wrap__blocks__item__content"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                        data-aos-offset="100"
                                    >
                                        <span className="title">{translate('page.body.landing.features.efficient.title')}</span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.efficient.text1')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.efficient.text2')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.efficient.text3')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.efficient.text4')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.efficient.text5')}</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="pg-landing-screen__features__wrap__blocks__item">
                                    <div
                                        className="pg-landing-screen__features__wrap__blocks__item__image"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-offset="100"
                                    >
                                        <img src={ManagementImage} alt="Management"/>
                                    </div>
                                    <div
                                        className="pg-landing-screen__features__wrap__blocks__item__content"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                        data-aos-offset="100"
                                    >
                                        <span className="title">{translate('page.body.landing.features.management.title')}</span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.management.text1')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.management.text2')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.management.text3')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.management.text4')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.management.text5')}</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="pg-landing-screen__features__wrap__blocks__item">
                                    <div
                                        className="pg-landing-screen__features__wrap__blocks__item__image"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-offset="100"
                                    >
                                        <img src={MeticulousImage} alt="Meticulous"/>
                                    </div>
                                    <div
                                        className="pg-landing-screen__features__wrap__blocks__item__content"
                                        data-aos="fade-up"
                                        data-aos-duration="1200"
                                        data-aos-offset="100"
                                    >
                                        <span className="title">{translate('page.body.landing.features.meticulous.title')}</span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.meticulous.text1')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.meticulous.text2')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.meticulous.text3')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.meticulous.text4')}</span>
                                        </span>
                                        <span className="text">
                                            <img src={CheckIcon} alt=""/>
                                            <span>{translate('page.body.landing.features.meticulous.text5')}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </VisibilitySensor>
            </ScrollableAnchor>
        );
    }
}

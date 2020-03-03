import * as React from 'react';

/* Icons */
const ReliableImage = require('../../assets/images/landing/features/Reliable.svg');
const EfficientImage = require('../../assets/images/landing/features/Efficient.svg');
const ManagementImage = require('../../assets/images/landing/features/Management.svg');
const MeticulousImage = require('../../assets/images/landing/features/Meticulous.svg');
const CheckIcon = require('../../assets/images/landing/features/Check.svg');

interface OwnProps {
    translate: (key: string) => string;
}

type Props = OwnProps;

export class LandingFeatures extends React.Component<Props> {
    public render() {
        const { translate } = this.props;

        return (
            <div className="pg-landing-screen__features">
                <div className="pg-landing-screen__features__wrap">
                    <h1>{translate('page.body.landing.features.title')}</h1>
                    <h2>{translate('page.body.landing.features.subtitle')}</h2>
                    <div className="pg-landing-screen__features__wrap__blocks">
                        <div className="pg-landing-screen__features__wrap__blocks__item">
                            <div className="pg-landing-screen__features__wrap__blocks__item__image">
                                <img src={ReliableImage} alt="Reliable"/>
                            </div>
                            <div className="pg-landing-screen__features__wrap__blocks__item__content">
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
                            <div className="pg-landing-screen__features__wrap__blocks__item__image">
                                <img src={EfficientImage} alt="Efficient"/>
                            </div>
                            <div className="pg-landing-screen__features__wrap__blocks__item__content">
                                <span className="title">{translate('page.body.landing.features.efficient.title')}</span>
                                <span className="text">{translate('page.body.landing.features.efficient.text1')}</span>
                                <span className="text">{translate('page.body.landing.features.efficient.text2')}</span>
                                <span className="text">{translate('page.body.landing.features.efficient.text3')}</span>
                                <span className="text">{translate('page.body.landing.features.efficient.text4')}</span>
                                <span className="text">{translate('page.body.landing.features.efficient.text5')}</span>
                            </div>
                        </div>
                        <div className="pg-landing-screen__features__wrap__blocks__item">
                            <div className="pg-landing-screen__features__wrap__blocks__item__image">
                                <img src={ManagementImage} alt="Management"/>
                            </div>
                            <div className="pg-landing-screen__features__wrap__blocks__item__content">
                                <span className="title">{translate('page.body.landing.features.management.title')}</span>
                                <span className="text">{translate('page.body.landing.features.management.text1')}</span>
                                <span className="text">{translate('page.body.landing.features.management.text2')}</span>
                                <span className="text">{translate('page.body.landing.features.management.text3')}</span>
                                <span className="text">{translate('page.body.landing.features.management.text4')}</span>
                                <span className="text">{translate('page.body.landing.features.management.text5')}</span>
                            </div>
                        </div>
                        <div className="pg-landing-screen__features__wrap__blocks__item">
                            <div className="pg-landing-screen__features__wrap__blocks__item__image">
                                <img src={MeticulousImage} alt="Meticulous"/>
                            </div>
                            <div className="pg-landing-screen__features__wrap__blocks__item__content">
                                <span className="title">{translate('page.body.landing.features.meticulous.title')}</span>
                                <span className="text">{translate('page.body.landing.features.meticulous.text1')}</span>
                                <span className="text">{translate('page.body.landing.features.meticulous.text2')}</span>
                                <span className="text">{translate('page.body.landing.features.meticulous.text3')}</span>
                                <span className="text">{translate('page.body.landing.features.meticulous.text4')}</span>
                                <span className="text">{translate('page.body.landing.features.meticulous.text5')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

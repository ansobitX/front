import * as React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

/* Icons */
const VendorImage = require('../../../assets/images/landing/benefits/Vendor.svg');
const SafetyImage = require('../../../assets/images/landing/benefits/Safety.svg');
const MarketImage = require('../../../assets/images/landing/benefits/Market.svg');
const GlobalImage = require('../../../assets/images/landing/benefits/Global.svg');

interface OwnProps {
    changeRoute: (isVisible: boolean, route: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

// tslint:disable-next-line: no-default-export
export default class LandingBenefits extends React.Component<Props> {
    public render() {
        const { changeRoute, translate } = this.props;

        return (
            <div className="pg-landing-screen__benefits">
                <div className="pg-landing-screen__benefits__wrap">
                    <h1
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-offset="100"
                    >
                        {translate('page.body.landing.benefits.title')}
                    </h1>
                    <VisibilitySensor onChange={e => changeRoute(e, 'benefits')} partialVisibility={true}>
                        <div
                            className="pg-landing-screen__benefits__wrap__blocks"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                        >
                            <div className="pg-landing-screen__benefits__wrap__blocks__item">
                                <span className="image"><img src={VendorImage} alt="vendor"/></span>
                                <span className="title">{translate('page.body.landing.benefits.vendor.title')}</span>
                                <span className="title">{translate('page.body.landing.benefits.vendor.title2')}</span>
                                <span className="subtitle">{translate('page.body.landing.benefits.vendor.subtitle')}</span>
                                <span className="text">{translate('page.body.landing.benefits.vendor.text')}</span>
                            </div>
                            <div className="pg-landing-screen__benefits__wrap__blocks__item">
                                <span className="image"><img src={SafetyImage} alt="safety"/></span>
                                <span className="title">{translate('page.body.landing.benefits.safety.title')}</span>
                                <span className="title">{translate('page.body.landing.benefits.safety.title2')}</span>
                                <span className="subtitle">{translate('page.body.landing.benefits.safety.subtitle')}</span>
                                <span className="text">{translate('page.body.landing.benefits.safety.text')}</span>
                            </div>
                            <div className="pg-landing-screen__benefits__wrap__blocks__item">
                                <span className="image"><img src={MarketImage} alt="market"/></span>
                                <span className="title">{translate('page.body.landing.benefits.market.title')}</span>
                                <span className="title">{translate('page.body.landing.benefits.market.title2')}</span>
                                <span className="subtitle">{translate('page.body.landing.benefits.market.subtitle')}</span>
                                <span className="text">{translate('page.body.landing.benefits.market.text')}</span>
                            </div>
                            <div className="pg-landing-screen__benefits__wrap__blocks__item">
                                <span className="image"><img src={GlobalImage} alt="global"/></span>
                                <span className="title">{translate('page.body.landing.benefits.global.title')}</span>
                                <span className="title">{translate('page.body.landing.benefits.global.title2')}</span>
                                <span className="subtitle">{translate('page.body.landing.benefits.global.subtitle')}</span>
                                <span className="text">{translate('page.body.landing.benefits.global.text')}</span>
                            </div>
                        </div>
                    </VisibilitySensor>
                </div>
            </div>
        );
    }
}

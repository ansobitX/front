import * as React from 'react';
import { Link } from 'react-router-dom';
import VisibilitySensor from 'react-visibility-sensor';
import {
    LandingPricesBusiness,
    LandingPricesCorporate,
    LandingPricesPro,
    LandingPricesStartUp,
} from './Cards';

/* Icons */
const ArrowCircleIcon = require('../../../assets/images/landing/icons/ArrowCircle.svg');

interface OwnProps {
    changeRoute: (isVisible: boolean, route: string) => void;
    translate: (key: string) => string;
}

type Props = OwnProps;

export class LandingPrices extends React.Component<Props> {
    public render() {
        const { changeRoute, translate } = this.props;

        return (
                <div className="pg-landing-screen__prices">
                    <VisibilitySensor onChange={e => changeRoute(e, 'prices')} partialVisibility={true}>
                        <div className="pg-landing-screen__prices__wrap">
                            <h1
                                data-aos="fade-down"
                                data-aos-duration="1000"
                                data-aos-offset="100"
                            >
                                {translate('page.body.landing.prices.title1')}
                                <br />
                                {translate('page.body.landing.prices.title2')}
                            </h1>
                            <div className="pg-landing-screen__prices__wrap__content">
                                <div
                                    className="pg-landing-screen__prices__wrap__content__items"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-offset="100"
                                >
                                    <LandingPricesStartUp translate={translate} />
                                    <LandingPricesPro translate={translate} />
                                    <LandingPricesBusiness translate={translate} />
                                    <LandingPricesCorporate translate={translate} />
                                </div>
                                <Link className="pg-landing-screen__prices__wrap__content__tech-sales" to="#">
                                    <span>{translate('page.body.landing.prices.salesLink')}</span>
                                    <img src={ArrowCircleIcon} alt="Arrow"/>
                                </Link>
                            </div>
                        </div>
                    </VisibilitySensor>
                </div>
        );
    }
}

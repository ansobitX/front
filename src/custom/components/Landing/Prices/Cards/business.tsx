import * as React from 'react';
import { Link } from 'react-router-dom';

/* Icons */
const CheckIcon = require('../../../../assets/images/landing/prices/Check.svg');

interface OwnProps {
    translate: (key: string) => string;
}

type Props = OwnProps;

export class LandingPricesBusiness extends React.Component<Props> {
    public render() {
        const { translate } = this.props;

        return (
            <div className="price-card">
                <h1>{translate('page.body.landing.prices.card.business.title')}</h1>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.liquidity.label')}</span>
                    <span>{translate('page.body.landing.prices.card.business.liquidity.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.setupFee.label')}</span>
                    <span>{translate('page.body.landing.prices.card.business.setupFee.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.subscriptionFee.label')}</span>
                    <span>{translate('page.body.landing.prices.card.business.subscriptionFee.value')}</span>
                </div>
                <Link to="/deploy" className="landing-button">
                    {translate('page.body.landing.prices.card.business.deploy')}
                </Link>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.supportLevel.label')}</span>
                    <span>{translate('page.body.landing.prices.card.business.supportLevel.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.cpu.label')}</span>
                    <span>{translate('page.body.landing.prices.card.business.cpu.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.ram.label')}</span>
                    <span>{translate('page.body.landing.prices.card.business.ram.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.marketPairs.label')}</span>
                    <span>{translate('page.body.landing.prices.card.business.marketPairs.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.monitoring.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.finex.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.currencies.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.currencies2.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.currencies3.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.frontEnd.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.backEnd.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.business.arke.label')}</span>
                    <span>{translate('page.body.landing.prices.card.business.arke.value')}</span>
                </div>
            </div>
        );
    }
}

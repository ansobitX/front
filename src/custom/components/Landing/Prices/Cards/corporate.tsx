import * as React from 'react';
import { Link } from 'react-router-dom';

/* Icons */
const CheckIcon = require('../../../../assets/images/landing/prices/Check.svg');

interface OwnProps {
    translate: (key: string) => string;
}

type Props = OwnProps;

export class LandingPricesCorporate extends React.Component<Props> {
    public render() {
        const { translate } = this.props;

        return (
            <div className="price-card">
                <h1>{translate('page.body.landing.prices.card.corporate.title')}</h1>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.liquidity.label')}</span>
                    <span>{translate('page.body.landing.prices.card.corporate.liquidity.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.setupFee.label')}</span>
                    <span>{translate('page.body.landing.prices.card.corporate.setupFee.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.subscriptionFee.label')}</span>
                    <span>{translate('page.body.landing.prices.card.corporate.subscriptionFee.value')}</span>
                </div>
                <Link to="/deploy" className="landing-button">
                    {translate('page.body.landing.prices.card.corporate.deploy')}
                </Link>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.supportLevel.label')}</span>
                    <span>{translate('page.body.landing.prices.card.corporate.supportLevel.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.cpu.label')}</span>
                    <span>{translate('page.body.landing.prices.card.corporate.cpu.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.ram.label')}</span>
                    <span>{translate('page.body.landing.prices.card.corporate.ram.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.marketPairs.label')}</span>
                    <span>{translate('page.body.landing.prices.card.corporate.marketPairs.value')}</span>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.monitoring.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.finex.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.currencies.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.currencies2.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.currencies3.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.currencies4.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.customBlockchains.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.frontEnd.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.backEnd.label')}</span>
                    <img src={CheckIcon} alt=""/>
                </div>
                <div className="price-card__value">
                    <span>{translate('page.body.landing.prices.card.corporate.arke.label')}</span>
                    <span>{translate('page.body.landing.prices.card.corporate.arke.value')}</span>
                </div>
            </div>
        );
    }
}
